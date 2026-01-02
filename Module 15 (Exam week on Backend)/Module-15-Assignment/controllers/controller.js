import e from "express";
import jwt from "jsonwebtoken";
export const Hello = (req, res) => {
    res.send("Hello World");
};

export const GetJson = (req, res) => { 
    const token = jwt.sign({ user: "Auni" }, '825978299', { expiresIn: '1h' });
    res.json({ token });
};

export const PostRequest = (req, res) => {
    res.send("I am post body");
};
