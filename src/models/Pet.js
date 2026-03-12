import mongoose from 'mongoose';

const petSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    species: {
      type: String,
      required: true,
    },
    breed: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
      required: true,
    },
    vaccinated: {
      type: Boolean,
      default: false,
    },
    location: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['available', 'adopted'],
      default: 'available',
    },
    imageUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Pet = mongoose.model('Pet', petSchema);

export default Pet;
