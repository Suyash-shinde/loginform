import mongoose, {Schema} from "mongoose";

const userSchema= new Schema({
    username: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
        trim: true,
        index: true,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
        trim: true,
        index: true,
    },
    password:{
        type: String,
        required: true,
        min: 8,
    }
})
const User = mongoose.model("User", userSchema);
    export default User;