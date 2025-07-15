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
        console.log("Error while creating the an User",error.message);
        if (error.code === 11000) {
            return res.status(409).json({
              success: false,
              message: "Email already exists"
          });
        }

       return res.status(500).json({
         success: false,
         message: "Internal server error"
       });
    }
}