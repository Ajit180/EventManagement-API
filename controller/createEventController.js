import { createEvent, getAllEventService, registerUserService } from "../service/eventService.js";


export const createEventController = async(req,res)=>{
      try {

     const event =  await createEvent({
            title:req.body.title,
            dateTime:req.body.dateTime,
            location:req.body.location,
            capacity:req.body.capacity
        })

        return res.status(201).json({
          success:true,
          message:"event Created Successfully",
          data:event
        })
        
      } catch (error) {
        console.log("Error while creating an event",error.message);
      }
}


export const getAllEventController = async(req,res)=>{

    try {

        const event = await getAllEventService();

        return res.status(201).json({
            success:true,
            message:"All event fetched successfully",
            data:event
        })
        
    } catch (error) {
        console.log("Error in getting the events")
    }
}


export const registerUserController = async(req,res)=>{
    try {
        
        const {EventId}= req.params;
        const {userId} = req.body;
        console.log(EventId);
        const event = await registerUserService(EventId,userId);

        return res.status(201).json({
            success:true,
            message:"User is Registered Successfully",
            data:event
        })
        
    } catch (error) {
        console.log("Error while Registering an user",error);

        return res.status(409).json({
            success:false,
            message:"User is Already part of the Event ",
            data:error
        })
    }
}