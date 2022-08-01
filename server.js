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

app.listen(8000,function(){
    console.log("server is running");
});