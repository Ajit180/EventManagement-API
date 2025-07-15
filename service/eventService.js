import Event from "../model/event.js";

export const createEvent = async (data) => {
  try {
    const title = data.title;
    const location = data.location;
    const capacity = data.capacity;
    const dateTime = data.dateTime;

    const createEvent = await Event.create({
      title,
      dateTime,
      location,
      capacity,
    });

    return createEvent;
  } catch (error) {
    console.log("Error while creating an event", error);
  }
};

export const getAllEventService = async () => {
  try {
    const getAllEvent = await Event.find();
    return getAllEvent;
  } catch (error) {}
};

export const registerUserService = async (EventId, userId) => {
  try {
    //if Event is exits
    const EventFetch = await Event.findById(EventId);
    console.log(EventId);
    if (!EventFetch) {
      throw {
        status: 404,
        message: "Event is not Exits",
      };
    }
    //validate the Event not in Past , not full , user not already present

    //check the user is present or not
    // const alreadyRegistred = EventFetch.registrations.includes(userId);
    console.log("Comparing:", userId, EventFetch.registrations);

      const alreadyRegistred = EventFetch.registrations.some(
        (registredUserId)=>registredUserId.toString()===userId
      )
      console.log(alreadyRegistred);
      if(alreadyRegistred){
        throw{
            status:409,
            message:"User is Already Registered"
        }
      }

    //validate the Event not in Past 
    const now = Date.now();
    const Eventdate = EventFetch.dateTime;
    if(Eventdate<now){
        throw{
            status:400,
            message:"Cannot Register for the past Event"
        }
    }

    const eventcapacity = EventFetch.capacity;
 //push the userId when the user is not already registred ,data is not past and the capcity not filled 
    if(!alreadyRegistred && Eventdate>now && eventcapacity<1000){
        EventFetch.registrations.push(userId);
        await EventFetch.save();
    }


    return EventFetch;

  } catch (error) {
    console.log("Error while registering the User",error.message);
    throw error;
  }
};


export const cancelRegistrationService = async(EventId,userId)=>{

    try {
        const EventFetch = await Event.findById(EventId);
        if (!EventFetch) {
          throw {
           status: 404,
            message: "Event is not Exits",
            };
         }

         const isUserRegister =  EventFetch.registrations.some(
        (registredUserId)=>registredUserId.toString()===userId
      )

      if(!isUserRegister){
        throw{
            status:409,
            message:"User wasn't registered"
        }
      }

      if(isUserRegister){
        EventFetch.registrations.pull(userId);
        await EventFetch.save();
      }

        
    } catch (error) {
        console.log("Error while CancelRegistration",error);
        throw error;
    }
}


export const futureEventService = async(sortBy)=>{

    try {

        //dynamic sorting 
        let sortcriteria = {};
        if(sortBy==='location'){
            sortcriteria.location = 1;
        }else if(sortBy==='title'){
           sortcriteria.title =1
        }else{
            sortcriteria.dateTime=1; //by default
        }

        const now = new Date();
        let filter = {dateTime:{$gt:now}}

        const futureEvents = await Event.find(filter).sort(sortcriteria);
        return futureEvents;

        
    } catch (error) {
        console.log("Error in finding the Events",error);
        throw error;
    }
}


export const eventStatService = async(EventId)=>{
    try {

        const event = await Event.findById(EventId);
        const totalregistration = event.registrations.length;
        const remaningcapacity = event.capacity - totalregistration;
        const percentageused = Math.round((totalregistration/event.capacity)*100)

        return {
            EventId,
            totalregistration,
            remaningcapacity,
            percentageused
        }
        
    } catch (error) {
        console.log("Error in getting the eventStats",error);
    }
}