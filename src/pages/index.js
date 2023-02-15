import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import todo from "@/server/models/todo";
import dbconnect from "@/server/utils/dbConnect";
import axios from "axios";
import Head from "next/head";
import { useState } from "react";

export default function Home({ todos }) {
  const [todosData, setTodosData] = useState(todos);

  const addTodoHandler = async (formData) => {
    axios
      .post("/api/todos", { formData })
      .then(({ data }) => setTodosData(data.todos))
      .catch((err) => console.log(err));
  };

  const deleteTodoHandler = async (id) => {
    axios
      .delete(`/api/todos/${id}`)
      .then(({ data }) => setTodosData(data.todos))
      .catch((err) => console.log(err));
  };

  const completeHandler = async (id) => {
    axios
      .put(`/api/todos/complete/${id}`)
      .then(({data}) => {
        setTodosData(data.todos);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Head>
        <title>Todo-app</title>
        <meta
          name="description"
          content="Simple TodoList app Generated by create next app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <main className="px-4 py-6 md:flex md:justify-center md:items-start md:gap-x-4">
        <TodoForm onAdd={addTodoHandler} />
        <TodoList
          todos={todosData}
          onDelete={deleteTodoHandler}
          onComplete={completeHandler}
        />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  dbconnect();
  const todos = await todo.find({});
  return {
    props: {
      todos: JSON.parse(JSON.stringify(todos)),
    },
  };
}
