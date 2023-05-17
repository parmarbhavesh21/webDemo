const express= require("express");
const app= express();
require("../maindir/src/db/coon")
const Register= require("./src/models/register")
const port= process.env.PORT || 5000;
const path= require("path");


// const pathdir= path.join(__dirname,"./views")


// app.use(express.static(pathdir))
app.set("view engine","ejs")

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.get("/",(req,resp)=>{
    resp.render("index")
})
app.get("/login",(req,resp)=>{
    resp.render("login.ejs")
})

app.post("/login",async(req,resp)=>{
   try {
       const password  =req.body.password;
    const email =req.body.email;

   const useremail=await  Register.findOne({email:email})
//    resp.send(useremail)

if(useremail.password===password){
    resp.status(200).render("index")
}else{
    resp.send("invild input")
}
  



   } catch (error) {
    resp.status(400).send("invalide Email")
   } 
})

app.get("/register",(req,resp)=>{
    resp.render("register")
})

app.post("/register",async(req,resp)=>{
    try{
      
     const registerempoly= new Register ({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
     })
 
     //  password hash
     

   await  registerempoly.save();
   resp.status(201).render("index")

    }catch(error){
        resp.status(400).send(error);
    }
  
})
















// const bcrypt=require("bcryptjs");

//     const securepassword= async (password)=>{
//     const passwordwordhash=   await bcrypt.hash(password,10);
//     console.log(passwordwordhash);
//     const passwordmatch=   await bcrypt.compare("thapp@134",passwordwordhash);
//     console.log(passwordmatch);
//     }
// securepassword("thapp@134");



app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})