import { cancelRegistrationService, createEvent, futureEventService, getAllEventService, registerUserService } from "../service/eventService.js";


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

export const cancelRegistrationController = async(req,res)=>{
    try {
        const {EventId}= req.params;
        const {userId} = req.body;
        console.log(EventId);

        const event = await cancelRegistrationService(EventId,userId);

        return res.status(201).json({
            success:true,
            message:"User is Registration is Cancelled",
            data:event
        })
        
    } catch (error) {
        console.log("Error in Cancelling User");
         return res.status(409).json({
            success:false,
            message:"User is not Registred ",
            data:error
        })
    }
}

export const futureEventsController = async(req,res)=>{
    try {
        const{sortBy}=req.query;
        const futureEvent = await futureEventService(sortBy);
        console.log(futureEvent);
        return res.status(201).json({
            success:true,
            message:"All Future Event Fetched",
            data:futureEvent
        })
        
    } catch (error) {
       console.log("Error while getting the Future Events");
       return res.status(500).json({
        success:false,
        message:"Error in Fetching the Future Events"
       })
    }
}