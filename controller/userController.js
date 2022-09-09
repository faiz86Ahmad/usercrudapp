const User = require("../models/User");

 // add user data

  const addUser = async(req,res,next)=>{
    const {name,email,role,plan,status} = req.body;

    if(!name || !email || !role || !plan || !status){
        res.status(422).json("plz fill the data");
    }

    try {
        
        const preuser = await User.findOne({email:email});
        console.log(preuser);

        if(preuser){
            res.status(422).json("this is user is already present");
        }else{
            const adduser = new User({
                name,email,role,plan,status
            });

            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }

    } catch (error) {
        res.status(422).json(error);
    }
 

  }

  // get all user data

  const getAllUsers = async(req,res,next)=>{
    try {
        const userdata = await User.find();
        res.status(201).json(userdata)
        console.log(userdata);
    } catch (error) {
        res.status(422).json(error);
    }

  }

  // get by id user data



  const getById = async(req,res,next)=>{
    try {
        console.log(req.params);
        const {id} = req.params;

        const userindividual = await User.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error);
    }

  }

  // update  user data

  const userUpdate = async(req,res,next)=>{
    try {
        const {id} = req.params;

        const updateduser = await User.findByIdAndUpdate(id,req.body,{
            new:true
        });

        console.log(updateduser);
        res.status(201).json(updateduser);

    } catch (error) {
        res.status(422).json(error);
    }


  }
  // delete user data
  const userDelete = async (req,res,next)=>{
    try {
        const {id} = req.params;

        const deletuser = await User.findByIdAndDelete({_id:id})
        console.log(deletuser);
        res.status(201).json(deletuser);

    } catch (error) {
        res.status(422).json(error);
    }

  }


exports.getAllUsers = getAllUsers;
exports.addUser=addUser;
exports.getById = getById;
exports.userUpdate = userUpdate;
exports.userDelete = userDelete;