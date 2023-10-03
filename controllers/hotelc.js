import Hotel from "../models/Hotel.js";
import { createError } from "../error.js";
import Users from "../models/Users.js";
import Room from "../models/Room.js";

export const CREATE_HOTEL = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

export const UPDATE_HOTEL = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};

export const DELETE_HOTEL = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("hotel has been deleted");
  } catch (err) {
    next(err);
  }
};

export const GET_HOTEL = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

export const GET_ALL_HOTEL = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

export const BOOK = async (req, res, next) => {
  const bookingData = req.body;

  try {
    const booking = new Hotel({
      Checkin: bookingData.checkIn,
      Checkout: bookingData.checkOut,
      NoOfRooms: bookingData.NoOfRooms,
      NoOfAdults: bookingData.NoOfAdults,
      NoOfChildren: bookingData.NoOfChildren,
      Massage: bookingData.Massage,
      DrySpa: bookingData.DrySpa,
      TotalBase: bookingData.TotalBase,
      TotalCost: bookingData.TotalCost,
    });

    const savedBooking = await booking.save();
    res.status(200).json(savedBooking);
  } catch (err) {
    next(err);
  }
};
