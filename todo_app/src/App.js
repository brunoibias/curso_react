import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export default class TodoApp extends React.Component {

  state = {
    lists: [],
  }

  onSaveList(newList) {
    const oldList = this.state.lists;
    this.setState({
      lists: [...oldList, newList],
    })
  }

  render() {
    const { lists } = this.state
    return (
      <div className='container z-depth-4 row '  >
        <h2> &nbsp;Faça sua Lista </h2>

        <TodoForm
          onSaveList={newList => this.onSaveList(newList)} />

        <div className='col s12'>
            <TodoList lists={lists}/>
        </div>
      </div >
    );
  }
}