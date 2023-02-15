import Todo from "./Todo";

const TodoList = ({ todos }) => {
  return (
    <section className="max-w-md w-full">
      {todos.length ? (
        todos.map((todo) => {
          return <Todo key={todo._id} todo={todo} />;
        })
      ) : (
        <p className="text-center font-bold">There Is No Task...!</p>
      )}
    </section>
  );
};

export default TodoList;
