const mongoose = require("mongoose");

// Define the Facility schema
const facilitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: [
        "Office",
        "Warehouse",
        "Manufacturing",
        "Mosque",
        "Retail",
        "Hospitality",
        "Other",
      ],
      required: true,
    },
    location: {
      type: {
        type: String,
        enum: ["Point"],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
    capacity: {
      type: Number,
    },
    description: {
      type: String,
    },
    manager: {
      type: String,
      required: false,
    },
    openingHours: {
      type: String,
    },
    contactInfo: {
      email: {
        type: String,
      },
      phone: {
        type: String,
        required: false,
      },
      // You can add more contact fields as needed
    },
    maintenanceSchedule: {
      type: String,
    },
    facilities: [String],
    features: [String],
    equipment: [String],
    // New fields
    pictures: [String], // URLs to pictures of the facility
    handicapFeatures: {
      type: Boolean,
      default: false,
    },
    numberOfDoors: {
      type: Number,
    },
    numberOfFloors: {
      type: Number,
    },
    // You can add more fields as needed
  },
  { timestamps: true }
);

// Create the Facility model
const Facility = mongoose.model("Facility", facilitySchema);

module.exports = Facility;
