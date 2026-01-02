import express from 'express';
import {json} from "express";

// export const createTask = async (req, res) => {
//     // Logic to create a task
//     return res.json ({ message: 'Task created' });
// }

// export const readTask = async (req, res) => {
//     // Logic to read a task
//     return res.json ({ message: 'Read Task successfully' });
// }

// export const updateTask = async (req, res) => {
//     // Logic to update a task
//     return res.json ({ message: 'Task updated' });
// }

// export const deleteTask = async (req, res) => {
//     // Logic to delete a task
//     return res.json ({ message: 'Task deleted' });
// }

export const demo1 = async (req, res) => {
    let name = req.params.name;
    let age = req.params.age;
    return res.json({name:name, age:age});
}

// query string
export const demo2 = async (req, res) => {
    let name = req.query.name;
    let age = req.query.age;
    return res.json({name:name, age:age});

}

// how to works with request JSON Body
export const demo3 = async (req, res) => {
    let JSONBody = req.body;
    return res.json({data:JSONBody});

}


// How to works with request from data files
// ...existing code...
export const demo4 =  async (req, res) => {
    let FormDataBody = req.body;
    console.log('demo4 body:', FormDataBody);
    if (req.files) console.log('demo4 files:', req.files);
    return res.json(FormDataBody);
}
export const demo5 = async (req, res) => {

}   