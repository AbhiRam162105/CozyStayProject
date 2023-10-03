import mongoose from "mongoose";
import Room from "./Room.js";
import User from "./Users.js";
const HotelSchema = new mongoose.Schema({
  Booking_id: {
    type: Number,
    required: true,
  },
  Book:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
  Checkin: {
    type: Date,
    required: true,
  },
  Checkout: {
    type: Date,
    required: true,
  },
  NoOfRooms: {
    type: Number,
    required: true,
    default: "1",
  },
  Rooms: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
  },
  NoOfAdults: {
    type: Number,
    default: "1",
  },
  NoOfChildren: {
    type: Number,
    default: "0",
  },
  Massage: {
    type: Number,
    default: 0,
  },
  DrySpa: {
    type: Number,
    default: 0,
  },
  TotalBase: {
    type: Number,
    default: 0.00,
  },
  TotalCost: {
    type: Number,
    default: 0.00,
  },
});

export default mongoose.model("Hotel", HotelSchema);
