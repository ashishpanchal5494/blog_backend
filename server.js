const express = require("express");
const app = express();
const cors = require("cors");
const blogs = require("./api/blogsData.json");
const port = 5000;

// middleware
app.use(
  cors({
    origin: "https://blog-frontend-sage-zeta.vercel.app/",
    methods: ["GET", "POST", "PUT", "DELETE"], // Adjust based on your API methods
    credentials: true, // If you're sending cookies or HTTP auth
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Blog server is running!");
});

app.get("/blogs", (req, res) => {
  res.send(blogs);
});
app.get("/blogs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  // console.log(id)
  const blog = blogs.filter((b) => b.id === id);
  // console.log(blog)
  res.send(blog);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
