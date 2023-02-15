import todo from "@/server/models/todo";

export default async function handler(req, res) {
  const { method, query } = req;

  if (method === "GET") {
    const todo = await getOneTodo(query);
    return res.status(200).json({ messag: "todo loaded", todo });
    
  }else if(method === "DELETE") {
    await todo.findByIdAndDelete(query.todoId);
    const todos = await todo.find({});
    return res.status(200).json({ message: "todo deleted successfully", todos });
  }
}

export async function getOneTodo(query) {
  const oneTodo = await todo.findById(query.todoId);
  return oneTodo;
}
