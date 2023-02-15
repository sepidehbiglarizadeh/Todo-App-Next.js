import { getOneTodo } from "@/pages/api/todos/[todoId]";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

const TodoPage = ({ todo }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: todo.title,
    description: todo.description,
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`/api/todos/${router.query.todoId}`, { todo: formData })
      .then((res) => router.push("/"))
      .catch((err) => console.log(err));
  };

  return (
    <form
      className="w-full md:max-w-md mx-auto bg-white max-w-md rounded-md shadow-md py-4 mt-4"
      onSubmit={submitHandler}
    >
      <div className="px-4 font-bold text-lg flex items-center gap-x-1 mb-4">
        <span className="border-4 border-rose-200 w-3 h-3 rounded-full inline-block"></span>
        <h2>Edit Task</h2>
      </div>
      <div className="mb-4 px-8">
        <label className="block" htmlFor="todo-title">
          Title :
        </label>
        <input
          type="text"
          id="todo-title"
          name="title"
          value={formData.title}
          onChange={changeHandler}
          placeholder="Todo Title..."
          className="outline-none border-b border-rose-200 p-2 rounded-md focus:border-2 w-full"
        />
      </div>
      <div className="mb-4 px-8">
        <label className="block" htmlFor="todo-description">
          Description :
        </label>
        <textarea
          id="todo-description"
          name="description"
          value={formData.description}
          onChange={changeHandler}
          className="outline-none border-b border-rose-200 p-2 rounded-md focus:border-2 w-full"
        ></textarea>
      </div>
      <div className="px-8 md:flex items-center gap-x-4">
        <button
          className="border border-rose-200 py-2 rounded-md text-rose-200 w-full mb-3 md:mb-0"
          onClick={() => router.push("/")}
        >
          Cancel
        </button>
        <button className="bg-rose-200 py-2 rounded-md text-white w-full">
          Update
        </button>
      </div>
    </form>
  );
};

export default TodoPage;

export async function getServerSideProps(context) {
  const { query } = context;
  const todo = await getOneTodo(query);
  return {
    props: {
      todo: JSON.parse(JSON.stringify(todo)),
    },
  };
}
