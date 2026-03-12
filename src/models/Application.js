import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    pet: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Pet',
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending',
    },
    applicantInfo: {
      phone: String,
      address: String,
      experience: String,
    },
  },
  {
    timestamps: true,
  }
);

const Application = mongoose.model('Application', applicationSchema);

export default Application;
