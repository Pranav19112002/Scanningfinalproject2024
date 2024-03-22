const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://pranavunnikrishnan56:pranav@cluster0.8z0svr8.mongodb.net/Scanning?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{console.log("Db connected")})
.catch(err=>console.log(err));


