class TodoList {
  tasks = [];

  /**
   * Add a task to the list. Throws an error if a task with same ID exists
   * @param {string} id
   * @param {string} task
   * @returns {undefined}
   */
  add(id, task) {
    const task = this.getItem(id);

    if (task) {
      throw new Error("There is already a todo item with this id.");
    }

    this.tasks.push({
      id,
      task,
      done: false,
    });
  }

  /**
   * Removes a task from the list. Ignores if a task with same id doesn't exist
   * @param {string} id
   * @returns {undefined}
   */
  remove(id) {
    this.tasks = this.tasks.filter((task) => task.id === id);
  }

  /**
   * Marks a task as complete. Throws an error if a task with ID does not exist
   * @param {string} id
   * @returns {undefined}
   */
  markAsDone(id) {
    const task = this.getItem(id);

    if (!task) {
      throw new Error("There is no todo item with this id.");
    }

    task.done = !task.done;
  }

  /**
   * Retrieves a task from the list.
   * @param {string} id
   * @returns {TodoItem | null}
   */
  getItem(id) {
    return this.tasks.find((task) => task.id === id) ?? null;
  }

  /**
   * Retries the task list in ascending order
   * @returns {TodoItem[]}
   */
  getAll() {
    this.tasks.sort((a, b) => a.id <= b.id);
    return [...this.tasks];
  }
}

/**
 * @typedef TodoItem
 * @type {object}
 * @prop {string} id
 * @prop {string} task
 * @prop {boolean} done
 */

export { TodoList };
