import bcrypt from "bcrypt";
import {User} from "../models/user.model.js";

export const Register= async (req, res, next)=>{
    try{
        const{ username,email,password } = req.body;
        const userPresent= await User.findOne({username});
        if(userPresent){
            return res.json({msg: "Username already exists", status:false});
        }
        const emailPresent= await User.findOne({email});
        if(emailPresent){
            return res.json({msg: "Email already exists", status:false});
        }
        const encryptedPassword = bcrypt.hashSync(password, 10);
        const newuser= await User.create({
            email,
            username,
            password: encryptedPassword
        });
        delete newuser.password;
        return res.json({msg: "New User Created", status: true});
    }
    catch (error){
        next(error);
    }
};

export const  login= async (req, res, next)=>{
   try {
    const{username, password}=req.body;
    const findUser= await User.findOne({username});
    if(!findUser){
        return res.json({msg:"invalid username", status:false});
    }
    const checkPassword= await bcrypt.compare(password,findUser.password)
    if(!checkPassword){
        return res.json({msg:"Invalid Password", status:false});
    }
    delete findUser.password;
    return res.json({msg:"user is validated!", status:true});
   } catch (error) {
        next(error);
   }
};
