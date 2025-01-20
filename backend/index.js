
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const todos = [{
  id: 1,
  title: "Buy Groceries",
  description: "Purchase vegetables, fruits, and snacks from the store",
  completed: false,
},
{
  id: 2,
  title: "Clean the House",
  description: "Dust and mop the entire house, including the living room",
  completed: false,
},
{
  id: 3,
  title: "Finish Project",
  description: "Complete the pending tasks in the group project",
  completed: false,
},
{
  id: 4,
  title: "Prepare Presentation",
  description: "Work on the slides for the client presentation",
  completed: false,
},
{
  id: 5,
  title: "Call the Plumber",
  description: "Fix the leaky faucet in the kitchen sink",
  completed: false,
},
{
  id: 6,
  title: "Schedule Meeting",
  description: "Set up a meeting with the team for project discussion",
  completed: false,
},
{
  id: 7,
  title: "Workout",
  description: "Go for a 30-minute jog and do strength exercises",
  completed: false,
},
{
  id: 8,
  title: "Read a Book",
  description: "Finish reading 'Atomic Habits' and take notes",
  completed: false,
},
{
  id: 9,
  title: "Plan a Trip",
  description: "Research and finalize the itinerary for the weekend trip",
  completed: false,
},
{
  id: 10,
  title: "Organize Closet",
  description: "Sort and arrange clothes in the wardrobe",
  completed: false,
}]

app.get("/todo", (req, res) => {
  const todo = todos.find(t => t.id == req.query.id);
  res.json({
    todo
  })
})

app.get("/todos", (req, res) => {
  const randomTodos = [];
  for (let i = 0; i < 10; i++) {
    if (Math.random() > 0.5) {
      randomTodos.push(todos[i]);
    }
  }
  res.json({
    todos: randomTodos,
  })
});

app.get("/sum", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const sum = a + b;
  res.send(sum.toString());
});

app.get("/interest", (req, res) => {
  const principal = parseInt(req.query.principal);
  const rate = parseInt(req.query.rate);
  const time = parseInt(req.query.time);
  const interest = (principal * rate * time) / 100;
  const total = principal + interest;
  res.send({
    total: total,
    interest: interest,
  })

});

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

app.get("/notifications", (req, res) => {
  res.json({
    network: getRandomNumber(10),
    jobs: getRandomNumber(10),
    messaging: getRandomNumber(10),
    notifications: getRandomNumber(10)
  })

})

app.listen(3000)
