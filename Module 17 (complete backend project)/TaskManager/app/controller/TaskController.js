import TasksModel from "../model/TasksModel.js";
export const CreateTask = async (req, res) => {
    try {
        let reqBody = req.body;

        let user_id = req.headers["user_id"];
        
        reqBody.user_id = user_id;
        await TasksModel.create(reqBody);
        console.log(reqBody);
        return res.status(200).json({ status: "success", message: "Task Created Successfully" });
    } catch (err) {
        console.error("Error creating task:", err);
        return res.status(500).json({ status: "error", message: "Internal Server Error" });
    }
    
}

export const UpdateTaskStatus = async (req, res) => {
    try{
        let id = req.params.id;
        let status = req.params.status;
        let user_id = req.headers["user_id"];
        await TasksModel.updateOne(
            { _id: id, user_id },
            { status } 
        );
        return res.status(200).json({status:"success",message:"Task Updated Successfully"});
    }catch(err){
        console.error("Error updating task:", err);
        return res.status(500).json({ status: "error", message: "Internal Server Error" });
    }
    
}

export const DeleteTask = async (req, res) => {

    return res.status(200).json({status:"success",message:"Task Deleted Successfully"});
}

export const TaskList = async (req, res) => {

    return res.status(200).json({status:"success",message:"Task List"});
}

export const CountTask = async (req, res) => {

    return res.status(200).json({status:"success",message:"Task Count"});
}