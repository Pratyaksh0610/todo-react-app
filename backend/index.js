const express = require("express");
const cors = require("cors");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "Zod verification failed, wrong inputs",
    });
    return;
  }

  const task = new todo({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  await task.save();

  res.json({
    msg: "Todo created",
  });
});

app.get("/todos", async function (req, res) {
  try {
    const arr = await todo.find({});
    res.status(200).json({
      msg: "All tasks retrived",
      arr,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      msg: "ERROR",
    });
  }
  return;
});

app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "Zod verification failed, wrong inputs",
    });
    return;
  }
  try {
    const result = await todo.update(
      {
        _id: updatePayload.id,
      },
      { completed: true }
    );
    res.json({
      msg: "Todo marked as completed",
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      msg: "NOT UPDATED",
    });
  }
});

app.listen(3000, function () {
  console.log("Listening at " + port);
});
