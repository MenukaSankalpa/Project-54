import express from "express";
const router = express.Router();

// Pass db connection from server.js later
let db;

// Initialize router with db
export const initUserRoutes = (database) => {
  db = database;

  // Get all users
  router.get("/", (req, res) => {
    const query = "SELECT id, name, email, role, created_at FROM users";
    db.query(query, (err, results) => {
      if (err) return res.status(500).json({ message: "Database error", err });
      res.json(results);
    });
  });

  // Create new user
  router.post("/", (req, res) => {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const query = "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)";
    db.query(query, [name, email, password, role], (err, result) => {
      if (err) return res.status(500).json({ message: "Database error", err });
      res.json({ message: "User created successfully", id: result.insertId });
    });
  });

  return router;
};
