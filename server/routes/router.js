const express=require('express');
const route=express.Router();
const services=require('../services/render');
const controller=require('../controller/controller');

route.get('/',services.homeRoutes);
route.get('/add-user',services.adduser);
route.get('/update-user',services.updateuser);

//API
route.post('/api/users',controller.create);
route.get('/api/usersfind',controller.find);
route.put('/api/usersupdate/:id',controller.update);
route.delete('/api/usersdelete/:id',controller.delete);

module.exports=route;