// This file is now a plain JS module with JSDoc for type hints

/**
 * @typedef {Object} Task
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {boolean} completed
 * @property {string} createdAt
 * @property {string} [dueDate]
 * @property {'low'|'medium'|'high'} priority
 * @property {string} category
 * @property {string[]} tags
 */

/**
 * @typedef {'all'|'completed'|'pending'} TaskFilter
 * @typedef {'low'|'medium'|'high'} TaskPriority
 */
