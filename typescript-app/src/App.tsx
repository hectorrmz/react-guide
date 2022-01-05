import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App(): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo('Learn React'),
    new Todo('Learn Typescript'),
  ]);

  const onSubmitHandler = (text: string) => {
    setTodos((prevState) => [...prevState, new Todo(text)]);
  };

  const removeItemHandler = (id: number) => {
    setTodos((prevState) => prevState.filter((item) => item.id !== id));
  };

  return (
    <div>
      <NewTodo onAddToDo={onSubmitHandler} />
      <Todos items={todos} onItemClick={removeItemHandler} />
    </div>
  );
}

export default App;
