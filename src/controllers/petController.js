import Pet from '../models/Pet.js';

export const getPets = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;
    const species = req.query.species;
    const breed = req.query.breed;
    const search = req.query.search;

    let query = {};

    if (species) query.species = { $regex: new RegExp(`^${species}$`, 'i') };
    if (breed) query.breed = breed;
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { breed: { $regex: search, $options: 'i' } },
      ];
    }

    console.log("+++++++", search)

    const count = await Pet.countDocuments(query);
    const pets = await Pet.find(query)
      .limit(limit)
      .skip(limit * (page - 1));

    res.json({
      pets,
      page,
      pages: Math.ceil(count / limit),
      total: count,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getPetById = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);

    if (pet) {
      res.json(pet);
    } else {
      res.status(404).json({ message: 'Pet not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
export const createPet = async (req, res) => {
  try {
    const pet = new Pet(req.body);
    const createdPet = await pet.save();
    res.status(201).json(createdPet);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const updatePet = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);

    if (pet) {
      pet.name = req.body.name || pet.name;
      pet.species = req.body.species || pet.species;
      pet.breed = req.body.breed || pet.breed;
      pet.age = req.body.age || pet.age;
      pet.description = req.body.description || pet.description;
      pet.status = req.body.status || pet.status;
      pet.imageUrl = req.body.imageUrl || pet.imageUrl;
      pet.price = req.body.price || pet.price;
      pet.gender = req.body.gender || pet.gender;
      pet.vaccinated = req.body.vaccinated || pet.vaccinated;
      pet.location = req.body.location || pet.location;

      const updatedPet = await pet.save();
      res.json(updatedPet);
    } else {
      res.status(404).json({ message: 'Pet not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const deletePet = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);

    if (pet) {
      await pet.deleteOne();
      res.json({ message: 'Pet removed' });
    } else {
      res.status(404).json({ message: 'Pet not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
