import {TokenDecode} from "../utility/tokenUtility.js";
export default (req, res, next) => {

    let token = req.headers["token"];
    let decode = TokenDecode(token);
    
    if(!decode){
        console.log("Unauthorized");
        return res.status(401).json({status:"error",message:"Unauthorized"});
    }
     else {
        // get the email from the decoded token
        let email = decode.email;
        // get the user_id from the decoded token
        let user_id = decode.user_id;
        
        // set the email and user_id in the request header
        req.headers.email = email;
        req.headers.user_id = user_id;

        next();
    }  
};