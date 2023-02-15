import { TrashIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Todo = ({ todo, onDelete,onComplete }) => {
  return (
    <div className="flex justify-between h-28 bg-white rounded-tl-[50px] rounded-br-[50px] overflow-hidden mb-6">
      <div className="p-3 md:p-4 w-full flex justify-between items-center">
        <div className="flex gap-x-6 items-center">
          <button onClick={()=>onComplete(todo._id)}>
            {todo.isCompleted ? (
              <CheckCircleIcon className="w-5 h-5 text-rose-200"/>
            ) : (
              <span className="border-4 border-rose-200 w-4 h-4 rounded-full inline-block"></span>
            )}
          </button>
          <Link href={`/todos/${todo._id}`}>
            <div>
              <span className="block text-xs mb-1">
                {new Date(todo.createdAt).toDateString()}
              </span>
              <span className={`block font-bold ${todo.isCompleted ? "line-through" : ""}`}>{todo.title}</span>
            </div>
          </Link>
        </div>
        <div className="flex flex-col justify-between h-full">
          <Link href={`/todos/edit/${todo._id}`}>
            <span className="text-sm">Edit</span>
          </Link>
          <button onClick={() => onDelete(todo._id)}>
            <TrashIcon className="w-5 h-5 text-rose-400" />
          </button>
        </div>
      </div>
      <figure>
        <img src="/images/shape-3.png" className="h-full" />
      </figure>
    </div>
  );
};

export default Todo;
