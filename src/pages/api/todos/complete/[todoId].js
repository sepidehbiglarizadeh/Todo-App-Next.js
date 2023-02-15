import todo from "@/server/models/todo";
import dbconnect from "@/server/utils/dbConnect";

dbconnect();

export default async function handler(req, res) {
  const { method, query } = req;
  if (method === "PUT") {
    const oneTodo = await todo.findById(query.todoId);
    oneTodo.isCompleted = !oneTodo.isCompleted;
    await oneTodo.save();
    const todos = await todo.find({});
    return res.status(200).json({ message: "Done !", todos });
  }
}
