// const mongoose= require("mongoose");
// mongoose.connect("mongodb://localhost:27017/youtube")
// .then(()=>{
//     console.log("conection successful");
// }).catch((e)=>{
//     console.log("conection error");
// })




const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/youtube', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});
