const mongoose=require("mongoose");
const bcrypt= require("bcryptjs")
const Emplyschema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
})
Emplyschema.pre("save",async function(next){
    if(this.isModified("password")){

        // const passwordwordhash=   await bcrypt.hash(password,10);
        console.log(`the curent password is ${this.password}`);
        this.password = await bcrypt.hash(this.password, 10);
        console.log(`the curent password is ${this.password}`);
    }
        next();
})


const Register= new mongoose.model("data",Emplyschema);
module.exports=Register;
