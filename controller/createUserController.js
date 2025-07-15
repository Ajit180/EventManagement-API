import { CreateUserService } from "../service/userService.js";


export const CreateUserController = async(req,res)=>{
    try {

        const User = await CreateUserService({
            name:req.body.name,
            email:req.body.email
        })

        return res.status(201).json({
            success:true,
            message:"User is created successfully",
            data:User
        })
        
    } catch (error) {
        console.log("Error while creating the an User",error.message)
    }
}