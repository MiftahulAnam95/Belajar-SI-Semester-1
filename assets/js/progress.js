window.SILabProgress = (() => {
  const data = window.SILabData;
  const STORAGE_KEY = "si-semester-1-lab-progress-v1";

  const defaultState = () => ({
    completedLessons: [],
    completedRecall: [],
    completedDebug: [],
    completedProjects: [],
    quizScores: [],
    badges: [],
    lastLesson: "",
    darkMode: false
  });

  const sanitizeArray = (value, validIds) => {
    if (!Array.isArray(value)) return [];
    return [...new Set(value.filter((item) => validIds.includes(item)))];
  };

  const loadState = () => {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      const fallback = defaultState();
      return {
        completedLessons: sanitizeArray(parsed.completedLessons, data.lessons.map((item) => item.id)),
        completedRecall: sanitizeArray(parsed.completedRecall, data.recallChallenges.map((item) => item.id)),
        completedDebug: sanitizeArray(parsed.completedDebug, data.debugChallenges.map((item) => item.id)),
        completedProjects: sanitizeArray(parsed.completedProjects, data.projects.map((item) => item.id)),
        quizScores: Array.isArray(parsed.quizScores)
          ? parsed.quizScores.map(Number).filter((score) => Number.isFinite(score) && score >= 0 && score <= 100)
          : [],
        badges: sanitizeArray(parsed.badges, data.badges.map((item) => item.id)),
        lastLesson: data.lessons.some((item) => item.id === parsed.lastLesson) ? parsed.lastLesson : fallback.lastLesson,
        darkMode: Boolean(parsed.darkMode)
      };
    } catch (error) {
      console.warn("Progress tidak dapat dibaca.", error);
      return defaultState();
    }
  };

  const state = loadState();

  const save = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      return true;
    } catch (error) {
      console.warn("Progress tidak dapat disimpan.", error);
      return false;
    }
  };

  const unlockBadges = () => {
    const newlyUnlocked = [];
    data.badges.forEach((badge) => {
      if (!state.badges.includes(badge.id) && badge.check(state)) {
        state.badges.push(badge.id);
        newlyUnlocked.push(badge.title);
      }
    });
    if (newlyUnlocked.length) save();
    return newlyUnlocked;
  };

  const markUnique = (collection, id) => {
    const added = !collection.includes(id);
    if (added) collection.push(id);
    const unlocked = unlockBadges();
    save();
    return { added, unlocked };
  };

  const markLesson = (id) => {
    if (!data.lessons.some((item) => item.id === id)) return { added: false, unlocked: [] };
    state.lastLesson = id;
    return markUnique(state.completedLessons, id);
  };

  const markRecall = (id) => {
    if (!data.recallChallenges.some((item) => item.id === id)) return { added: false, unlocked: [] };
    return markUnique(state.completedRecall, id);
  };

  const markDebug = (id) => {
    if (!data.debugChallenges.some((item) => item.id === id)) return { added: false, unlocked: [] };
    return markUnique(state.completedDebug, id);
  };

  const markProject = (id) => {
    if (!data.projects.some((item) => item.id === id)) return { added: false, unlocked: [] };
    return markUnique(state.completedProjects, id);
  };

  const saveQuizScore = (score) => {
    const normalized = Math.max(0, Math.min(100, Math.round(Number(score) || 0)));
    state.quizScores.push(normalized);
    if (state.quizScores.length > 10) state.quizScores.shift();
    const unlocked = unlockBadges();
    save();
    return unlocked;
  };

  const getAverageQuiz = () => {
    if (!state.quizScores.length) return 0;
    const total = state.quizScores.reduce((sum, score) => sum + score, 0);
    return Math.round(total / state.quizScores.length);
  };

  const getTotalProgress = () => {
    const units =
      data.lessons.length +
      data.recallChallenges.length +
      data.debugChallenges.length +
      data.projects.length +
      1;
    const completed =
      state.completedLessons.length +
      state.completedRecall.length +
      state.completedDebug.length +
      state.completedProjects.length +
      (state.quizScores.length ? getAverageQuiz() / 100 : 0);
    return Math.min(100, Math.round((completed / units) * 100));
  };

  const setLastLesson = (id) => {
    if (!data.lessons.some((item) => item.id === id)) return;
    state.lastLesson = id;
    save();
  };

  const setDarkMode = (enabled) => {
    state.darkMode = Boolean(enabled);
    save();
  };

  const resetProgress = () => {
    const fresh = defaultState();
    Object.keys(state).forEach((key) => {
      state[key] = fresh[key];
    });
    save();
  };

  return {
    state,
    markLesson,
    markRecall,
    markDebug,
    markProject,
    saveQuizScore,
    getAverageQuiz,
    getTotalProgress,
    setLastLesson,
    setDarkMode,
    resetProgress,
    unlockBadges
  };
})();
