const express = require("express");
const app = express();



const mockUserData = [
    {name: "akash"},
    {name: "Rathod"}
]

app.get('/users', function(rep, res){
    res.json({
        success:true,
        message: 'successfully got users. Nice',
        users: mockUserData
    })
});

app.get('/users/:id',function(req,res){
    console.log(req.param.id)
    res.json({
        success: true,
        message:'got one user',
        users: req.params.id
    })
})

app.listen(8000,function(){
    console.log("server is running");
});

