import ToDo from 'components/ToDo/ToDo';
import todoList from '../../todo.json';

class ToDoList extends Component {
  render() {
    return (
      <>
        <h1>My To-Do list</h1>
        <ul className="list-group list-group-flush">
          {todoList.map(todo => (
            <ToDo key={todo.id} todo={todo} />
          ))}
        </ul>
      </>
    );
  }
}

export default ToDoList;
