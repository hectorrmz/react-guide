import Todos from './components/Todos';
import Todo from './models/todo';

function App(): JSX.Element {
  const todos = [
    new Todo('id1', 'Learn React'),
    new Todo('id2', 'Learn Typescript'),
  ];

  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
