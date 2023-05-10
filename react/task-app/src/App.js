import './App.css';
import React from 'react';
import TaskList from './components/TaskList';
import uniqid from 'uniqid';

class App extends React.Component {
  state = {
    tasks: [],
    task: { title: '', id: uniqid(), order: 1 },
  };

  handleChange(e) {
    const { task } = this.state;

    this.setState({
      task: {
        ...task,
        title: e.target.value,
      },
    });
  }

  onSubmitTask(e) {
    const { task, tasks } = this.state;

    this.setState({
      tasks: [...tasks, task],
      task: {
        title: '',
        id: uniqid(),
        order: task.order + 1,
      },
    });

    e.target.reset();
    e.preventDefault();
  }

  deleteTask(removedTask) {
    const { tasks } = this.state;

    this.setState({
      tasks: tasks.filter((task) => task !== removedTask),
    });
  }

  updateTask(updatedTask) {
    const { tasks } = this.state;

    this.setState({
      tasks: tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      ),
    });

    // Is the approach below okay? It works & updates the task.
    // Pros: Doesn't cause a re-render
    // Cons: Too specific, works only if the title was updated; Mutating state?
    // const task = this.state.tasks.find((task) => task.id === updatedTask.id);
    // task.title = updatedTask.title;
  }

  render() {
    const { task, tasks } = this.state;

    return (
      <>
        <form onSubmit={this.onSubmitTask.bind(this)}>
          <label htmlFor="task-field">
            Enter Task
            <input
              type="text"
              id="task-field"
              value={task.title}
              onChange={this.handleChange.bind(this)}
            />
          </label>
          <button>Add Task</button>
        </form>

        <TaskList
          tasks={tasks}
          deleteTask={this.deleteTask.bind(this)}
          updateTask={this.updateTask.bind(this)}
        />
      </>
    );
  }
}

export default App;
