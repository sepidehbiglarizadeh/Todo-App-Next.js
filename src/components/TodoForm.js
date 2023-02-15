import { useState } from "react";

const TodoForm = () => {
  const [isShow, setIsShow] = useState(false);
  const [formData, setFormData] = useState({ title: "", description: "" });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFormData({ title: "", description: "" });
  };

  if (!isShow) {
    return (
      <div className="mb-4 md:mb-0">
        <button
          className="bg-rose-200 py-2 px-4 rounded-md text-white w-full"
          onClick={() => setIsShow((prevState) => !prevState)}
        >
          Add New Todo
        </button>
      </div>
    );
  }

  return (
    <form className="w-full bg-white max-w-md rounded-md shadow-md py-4" onSubmit={submitHandler}>
      <div className="px-4 font-bold text-lg flex items-center gap-x-1 mb-4">
        <span className="border-4 border-rose-200 w-3 h-3 rounded-full inline-block"></span>
        <h2>New Task</h2>
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
          onClick={() => setIsShow(false)}
        >
          Cancel
        </button>
        <button className="bg-rose-200 py-2 rounded-md text-white w-full">
          Add New Todo
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
