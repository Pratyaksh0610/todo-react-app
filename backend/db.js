const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://pratyaksh06:facebook123@cluster0.ngnfrai.mongodb.net/todo-list"
);
const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = new mongoose.model("todo", todoSchema);

// const new_post = new todo({
//   title: "test-post",
//   description: "Hello,this is the test post",
//   id: "12",
// });
// new_post.save();
// console.log("Saved");

module.exports = {
  todo: todo,
};
