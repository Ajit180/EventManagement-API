import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Tile is required"],
  },
  dateTime: {
    type: Date,
    required: [true, "Date and time are required"],
  },
  location: {
    type: String,
    required: [true, "location is required"],
  },
  capacity: {
    type: Number,
    required: true,
    min: [1, "Capacity must be aleast 1"],
    max: [1000, "Capacity cannot be execeed 1000"],
  },
  registrations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
},{timestamps:true});

const Event = mongoose.model('Event',eventSchema);
export default Event;
