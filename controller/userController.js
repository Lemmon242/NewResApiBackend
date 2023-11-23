const USERROLE = require('../model/userRoleModel');

// post user, c -- for create

const create_user = async (req,res)=>{
    try{
        await USERROLE.create(req.body);
        res.status(201).json({msg:'created successfuly'})

    }catch(error){
        console.log(error);
        res.status(500).json({msg:error})
    }
}


// get user, R -- for read

const getAll_users = async(req,res)=>{
    try{
        const users = await USERROLE.find({});
        if(users.length < 1)return res.json({msg:'No users found'})
        res.status(200).json({users})

    }catch(error){
        console.log(error);
        res.status(500).json({msg:error})
    }

}


// update user, U -- for update 

const update_user = async(req,res)=>{
    try{
      const {id:userId} = req.params
       await USERROLE.findOneAndUpdate({_id:userId}, req.body,{
        new : true,
        runValidators:true
      })
      res.status(200).json({msg:'user updated successfully'})
    }catch(error){
        console.log(error);
        res.status(500).json({msg:error})
    }
  }
// delete user, U -- for delete 

const delete_user = async(req,res)=>{
    try{
      const {id:userId} = req.params
      await USERROLE.findOneAndDelete({_id:userId})
      res.status(200).json({msg:'user deleted successfully'})
    }catch(error){
        console.log(error);
        res.status(500).json({msg:error})
    }
  }

// single user, U -- for update 

const single_user =async (req,res)=>{
    try{
      const {id:userid} = req.params
    const user = await USERROLE.findOne({_id:userid})
    res.status(200).json({user})
    }catch(error){
        console.log(error);
    }
  }


module.exports ={
    create_user,
    getAll_users,
    update_user,
    delete_user,
    single_user


}