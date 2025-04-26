const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // to read JSON body

// Default user + signup users will be stored here
const users = [
  { username: "chandru", password: "123" } // default user
];

// Signup Route
app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  
  // Push new user into array
  users.push({ username, password });

  console.log("Users after signup:", users);

  res.send("Signup success");
});

// Login Route
app.post("/login", (req, res) => {
    const { username, password } = req.body;
  
    const user = users.find((u) => u.username === username);
  
    if (!user) {
      return res.status(404).send("User not found");
    }
  
    if (user.password !== password) {
      return res.status(401).send("Incorrect password");
    }
  
    res.send("Login success");
  });
  

// Start server
app.listen(5000, function () {
  console.log("Server Started on port 3001...");
});
