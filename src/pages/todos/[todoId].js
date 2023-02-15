import { getOneTodo } from "../api/todos/[todoId]";

const TodoPage = ({todo}) => {
  return (
    <div className="mx-auto max-w-md px-2 py-4">
      <h1 className="text-xl font-bold mb-4">Todo Detail Page</h1>
      <h2>
        <strong className="font-bold">title</strong> : {todo.title}
      </h2>
      <p>
        <strong className="font-bold">description</strong> : {todo.description}
      </p>
    </div>
  );
};

export default TodoPage;

export async function getServerSideProps(context) {
  const { query } = context;
  const todo = await getOneTodo(query);
  return {
    props: {
      todo: JSON.parse(JSON.stringify(todo)),
      query,
    },
  };
}
