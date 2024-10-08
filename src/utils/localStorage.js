const TASKS_KEY = 'taskTrackerTasks';

/**
 * Save tasks array to localStorage
 * @param {Array} tasks
 */
export const saveTasks = (tasks) => {
  try {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error('Error saving tasks to localStorage:', error);
  }
};

/**
 * Load tasks array from localStorage
 * @returns {Array}
 */
export const loadTasks = () => {
  try {
    const saved = localStorage.getItem(TASKS_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('Error loading tasks from localStorage:', error);
    return [];
  }
};

/**
 * Clear tasks from localStorage
 */
export const clearTasks = () => {
  try {
    localStorage.removeItem(TASKS_KEY);
  } catch (error) {
    console.error('Error clearing tasks from localStorage:', error);
  }
};
