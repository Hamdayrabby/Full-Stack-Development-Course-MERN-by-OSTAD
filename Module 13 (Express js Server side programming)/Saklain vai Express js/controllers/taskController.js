import e from "express";

export const createTask = async (req, res) => {
  return res.json({ message: "createTask successfully" });
};

export const readTask = async (req, res) => {
  return res.json({ message: "readTask successfully" });
};

export const updateTask = async (req, res) => {
  return res.json({ message: "updateTask successfully" });
};

export const deleteTask = async (req, res) => {
  return res.json({ message: "deleteTask successfully" });
};