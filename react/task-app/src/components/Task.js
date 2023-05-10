import React from 'react';

class Task extends React.Component {
  state = {
    task: {},
    isEditingTask: false,
  };

  editTask(task) {
    this.setState({
      task,
      isEditingTask: true,
    });
  }

  changeTask(e) {
    this.setState({
      task: { ...this.state.task, title: e.target.value },
    });
  }

  updateTask() {
    this.props.updateTask(this.state.task);

    this.setState({
      task: {},
      isEditingTask: false,
    });
  }

  render() {
    const { isEditingTask, task: updatedTask } = this.state;
    const { task, deleteTask } = this.props;
    let taskView;

    if (isEditingTask) {
      taskView = (
        <li className="task">
          <input
            type="text"
            value={updatedTask.title}
            onChange={this.changeTask.bind(this)}
          />

          <div className="btn-group">
            <button onClick={this.updateTask.bind(this)}>Update Task</button>
          </div>
        </li>
      );
    } else {
      taskView = (
        <li className="task">
          <p>
            {task.order}. {task.title}
          </p>

          <div className="btn-group">
            <button onClick={() => deleteTask(task)}>Delete Task</button>
            <button onClick={() => this.editTask(task)}>Edit Task</button>
          </div>
        </li>
      );
    }

    return taskView;
  }
}

export default Task;
