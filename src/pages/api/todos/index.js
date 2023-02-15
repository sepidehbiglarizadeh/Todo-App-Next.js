import todo from "@/server/models/todo";
import dbconnect from "@/server/utils/dbConnect";

dbconnect();

export default async function handler(req, res) {
  const { method, body } = req;
  if (method === "POST") {
    const { formData } = body;
    await todo.create({
      title: formData.title,
      description: formData.description,
      createdAt: new Date(),
    });
    const todos = await todo.find({});
    return res.status(201).json({ message: "new todo added", todos });
  } else if (method === "GET") {
    const todos = await todo.find({});
    return res.status(200).json({ todos });
  }
}
