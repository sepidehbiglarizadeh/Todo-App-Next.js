import { TrashIcon } from "@heroicons/react/24/outline";

const Todo = () => {
  return (
    <div className="flex justify-between h-28 bg-white rounded-tl-[50px] rounded-br-[50px] overflow-hidden">
      <div className="p-3 md:p-4 w-full flex justify-between items-center">
        <div className="flex gap-x-6 items-center">
          <span className="border-4 border-rose-200 w-4 h-4 rounded-full inline-block"></span>
          <div>
            <span className="block text-xs mb-1">03:00 PM</span>
            <span className="block font-bold">Fitness-2 hours</span>
          </div>
        </div>
        <div className="flex flex-col justify-between h-full">
          <button className="text-sm">Edit</button>
          <button>
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
