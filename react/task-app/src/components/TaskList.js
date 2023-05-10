import React from 'react';
import Task from './Task';

class TaskList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            deleteTask={this.props.deleteTask}
            updateTask={this.props.updateTask}
          />
        ))}
      </ul>
    );
  }
}

export default TaskList;
