import UsersModel from "../model/UsersModel.js";
import { TokenEncode } from "../utility/tokenUtility.js";

//registration
export const Registration = async (req, res) => {
    try{
        let reqBody = req.body;
        let result= await UsersModel.create(reqBody);
        return res.status(200).json({status:"success",message:"User Registered Successfully", result});
    }catch(err){
        console.log(err);
        return res.status(500).json({status:"error",message:"Internal Server Error"});
    }
    
   
};


//login
export const Login = async (req,res) => {
    try{
        let reqBody = req.body;
        let data = await UsersModel.findOne(reqBody);
        if(data){
            let token = TokenEncode(data["email"],data["_id"]);
            console.log(token);
            return res.status(200).json({status:"success",message:"User Login Successfully",token});
        }
        return res.status(401).json({status:"error",message:"Data Not Found"});
    }
    catch(err){
        return res.status(500).json({status:"error",message:"Internal Server Error",err});
    }
}


//Profile Details
export const ProfileDetails=async(req,res)=>{
  
    try{
        let user_id = req.headers["user_id"];
        let data = await UsersModel.findOne({_id:user_id});
        console.log(data);
        return res.status(200).json({status:"success",message:"User Profile Details"});
    }catch(err){
        return res.status(500).json({status:"error",message:"Internal Server Error",err});
    }   

}

//Update Profile
export const ProfileUpdate=async(req,res)=>{
  
    try{
        let reqBody = req.body;
        let user_id = req.headers["user_id"];
        let data = await UsersModel.updateOne({ _id: user_id}, reqBody);
        return res.status(200).json({status:"success",message:"User Profile Updated Successfully", data: data});

    }catch(err){
        return res.status(500).json({status:"error",message:"Internal Server Error",err});
    }
}

export const  EmailVerify=async(req,res)=>{
  

    return res.status(200).json({status:"success",message:"Email Verified Successfully"});
}

export const CodeVerify=async(req,res)=>{
  

    return res.status(200).json({status:"success",message:"Code Verified Successfully"});
}

export const ResetPassword=async(req,res)=>{
  

    return res.status(200).json({status:"success",message:"Password Reset Link Sent to Your Email"});
}