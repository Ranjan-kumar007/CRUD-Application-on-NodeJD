const axios=require('axios');
exports.homeRoutes=(req,res)=>{
    //make a get request to api/users
    axios.get('http://localhost:3000/api/usersfind')
    .then(function(response){
        console.log(response)
        res.render('index',{users:response.data});
    })
    .catch(err=>{
        res.send(err);
    })
}
    

exports.adduser=(req,res)=>{
    res.render('add_user');
}
exports.updateuser=(req,res)=>{
    // console.log(req.query.id);
   axios.get('http://localhost:3000/api/usersfind/',{params:{id:req.query.id}})
   .then(function(userdata){
       console.log(userdata.data);
       res.render('update_user',{user:userdata.data});
   })
   .catch(err=>{
       res.send(err);
   })
}