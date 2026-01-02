import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { JWT_EXPIRE_TIME, JWT_KEY } from '../config/config.js';
export const TokenEncode = (email,user_id) => {
    // Logic to encode token
    let KEY = JWT_KEY;
    let EXPIRE = {expiresIn: JWT_EXPIRE_TIME};
    let PAYLOAD = {email : email, user_id : user_id};

    return jwt.sign(PAYLOAD, KEY, EXPIRE);
};

export const TokenDecode = (token) => {
    // Logic to decode token
    try{
        return jwt.verify(token, JWT_KEY);
    }catch(err){
        console.log(err);
        return null;
    }
};

