const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const port = 3000;
var cors = require("cors");

// Dummy database for demonstration purposes only
const users = [];
const products = [
  {
    title: "product 1",
    description: "An apple mobile which is nothing like apple",
    images: ["https://i.dummyjson.com/data/products/1/1.jpg"],
  },
  {
    title: "product 1",
    description: "An apple mobile which is nothing like apple",
    images: ["https://i.dummyjson.com/data/products/1/1.jpg"],
  },
  {
    title: "product 1",
    description: "An apple mobile which is nothing like apple",
    images: ["https://i.dummyjson.com/data/products/1/1.jpg"],
  },
  {
    title: "product 1",
    description: "An apple mobile which is nothing like apple",
    images: ["https://i.dummyjson.com/data/products/1/1.jpg"],
  },
  {
    title: "product 1",
    description: "An apple mobile which is nothing like apple",
    images: ["https://i.dummyjson.com/data/products/1/1.jpg"],
  },
  {
    title: "product 1",
    description: "An apple mobile which is nothing like apple",
    images: ["https://i.dummyjson.com/data/products/1/1.jpg"],
  },
  {
    title: "product 1",
    description: "An apple mobile which is nothing like apple",
    images: ["https://i.dummyjson.com/data/products/1/1.jpg"],
  },
  {
    title: "product 1",
    description: "An apple mobile which is nothing like apple",
    images: ["https://i.dummyjson.com/data/products/1/1.jpg"],
  },
  {
    title: "product 1",
    description: "An apple mobile which is nothing like apple",
    images: ["https://i.dummyjson.com/data/products/1/1.jpg"],
  },
  {
    title: "product 1",
    description: "An apple mobile which is nothing like apple",
    images: ["https://i.dummyjson.com/data/products/1/1.jpg"],
  },
  {
    title: "product 1",
    description: "An apple mobile which is nothing like apple",
    images: ["https://i.dummyjson.com/data/products/1/1.jpg"],
  },
];
app.use(cors());
app.use(bodyParser.json());

// Authentication routes
app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = { name: req.body.name, password: hashedPassword };
    users.push(user);
    res.status(201).send("User registered successfully");
  } catch {
    res.status(500).send("Error registering user");
  }
});

app.post("/login", async (req, res) => {
  const user = users.find((user) => user.name === req.body.name);
  if (user == null) {
    return res.status(400).send("Cannot find user");
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      const accessToken = jwt.sign(user, "secret");
      res.json({ accessToken: accessToken });
    } else {
      res.status(401).send("Incorrect password");
    }
  } catch (e) {
    console.log(e);
    res.status(500).send("Error logging in");
  }
});

// Middleware function to authenticate requests
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader;
  if (token == null) {
    return res.sendStatus(401);
  }
  jwt.verify(token, "secret", (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
}

// Product CRUD routes
app.get("/products", authenticateToken, (req, res) => {
  res.json(products);
});

app.post("/products", authenticateToken, (req, res) => {
  const product = { name: req.body.name, description: req.body.description };
  products.push(product);
  res.status(201).send("Product added successfully");
});

app.put("/products/:id", authenticateToken, (req, res) => {
  const product = products.find((product) => product.id === req.params.id);
  if (product == null) {
    return res.status(404).send("Product not found");
  }
  product.name = req.body.name;
  product.description = req.body.description;
  res.send("Product updated successfully");
});

app.delete("/products/:id", authenticateToken, (req, res) => {
  const index = products.findIndex((product) => product.id === req.params.id);
  if (index === -1) {
    return res.status(404).send("Product not found");
  }
  products.splice(index, 1);
  res.send("Product deleted successfully");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
