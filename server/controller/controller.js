var Userdb=require('../model/model');
// create and save new user

exports.create=(req,res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message:"content cant be empty"});
        return;
    }
    console.log(req.body);
    //new user
    const user=new Userdb({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
        })
        // save user in databse
        user
        .save(user)
        .then(data=>{
            //res.send(data)
            res.redirect('/add-user');
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message||"some error occured while creating a create operation"
            });
        });
  
}

// Find and update user by id
exports.find=(req,res)=>{
    if(req.query.id){
        const id=req.query.id;
        console.log("get id: ",id);
        Userdb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:"Not Found..!!"})
            }
            else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message:"Error retriving user with id"})
        })
    }
    else{
        Userdb.find()
        .then(user=>{
            res.send(user)
        })
        .catch(err=>{
            res.status.send({message:err.message||"Error occured while retriving user info"})
        })
    }
}

   
exports.update=(req,res)=>{
    if(!req.body)
    {
        return res
        .status(404)
        .send({message:"Data to update cant be empty"})
    }

    const id=req.params.id;
    Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then(data=>{
        if(!data)
        res.status(404).send({message:`cannot update with ${id}.maybe user not found`})
        else
        {
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message:"Error update user information"})
    })

}
// delete users record by id
exports.delete=(req,res)=>{
    const id=req.params.id;

    Userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:`cannot delete with ${id}.may be id is wrong`})
        }
        else
        {
            res.send({
                message:"User was deleted sucessfully...!!"
            })

        }
        })
  
    .catch(err=>{
        res.send(500)({
            message:"Cannnot be deleted..!!!"+id
        });
    });

}


