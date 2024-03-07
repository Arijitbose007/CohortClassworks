const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://admin:arijit1947@cluster0.afn5ksc.mongodb.net/myFirstDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true //The options useNewUrlParser: true and useUnifiedTopology: true are not mandatory to use when connecting to MongoDB using Mongoose
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});

const User = mongoose.model('User', { name: String, email: String, password: String });

app.post("/signup", async function (req, res) {
  const { userEmail, userPassword, userName } = req.body; //together input

  try {
    const existingUser = await User.findOne({ email: userEmail });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists." });
    }

    const newUser = new User({ name: userName, email: userEmail, password: userPassword });
    await newUser.save();
    res.json({ msg: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
