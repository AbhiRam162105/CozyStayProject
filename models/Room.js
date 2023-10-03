import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    NoOfBeds: {
      type: Number,
      required: true,
    },
    NoOfBath: {
      type: Number,
      required: true,
    },
    Area: {
      type: Number,
      required: true,
    },
    view: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);
