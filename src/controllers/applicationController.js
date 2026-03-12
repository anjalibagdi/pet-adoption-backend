import Application from '../models/Application.js';
import Pet from '../models/Pet.js';

export const createApplication = async (req, res) => {
  try {
    const { pet, applicantInfo } = req.body;

    const petData = await Pet.findById(pet);
    if (!petData) {
      return res.status(404).json({ message: 'Pet not found' });
    }
    if (petData.status !== 'available') {
      return res.status(400).json({ message: 'Pet is not available for adoption' });
    }

    const existingApplication = await Application.findOne({ user: req.user._id, pet });
    if (existingApplication) {
      return res.status(400).json({ message: 'You have already applied for this pet' });
    }

    const application = new Application({
      user: req.user._id,
      pet,
      applicantInfo,
    });

    const createdApplication = await application.save();
    res.status(201).json(createdApplication);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getMyApplications = async (req, res) => {
  try {
    const applications = await Application.find({ user: req.user._id }).populate('pet', 'name species imageUrl');
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getApplications = async (req, res) => {
  try {
    const applications = await Application.find({})
      .populate('user', 'id name email')
      .populate('pet', 'name species');
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const updateApplicationStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const application = await Application.findById(req.params.id);

    if (application) {
      application.status = status;
      const updatedApplication = await application.save();

      if (status === 'approved') {
        const pet = await Pet.findById(application.pet);
        if (pet) {
          pet.status = 'adopted';
          await pet.save();
        }
      }

      res.json(updatedApplication);
    } else {
      res.status(404).json({ message: 'Application not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
