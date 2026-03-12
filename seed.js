import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './src/models/User.js';
import Pet from './src/models/Pet.js';
dotenv.config();

const samplePets = [
    {
        name: 'Buddy',
        species: 'dog',
        breed: 'Golden Retriever',
        age: 3,
        description: 'Buddy is a friendly, energetic Golden Retriever who loves playing fetch and swimming. He is great with kids and other dogs.',
        imageUrl: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400',
        status: 'available',
        price: 200,
        gender: 'male',
        vaccinated: true,
        location: 'Indore'
    },
    {
        name: 'Luna',
        species: 'cat',
        breed: 'Siamese',
        age: 2,
        description: 'Luna is a graceful Siamese cat who loves to be the center of attention. She is affectionate and loves cuddles.',
        imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400',
        status: 'available',
        price: 250,
        gender: 'female',
        vaccinated: true,
        location: 'Indore'
    },
    {
        name: 'Max',
        species: 'dog',
        breed: 'German Shepherd',
        age: 4,
        description: 'Max is a loyal and intelligent German Shepherd. He is well-trained and great for active families.',
        imageUrl: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400',
        status: 'available',
        price: 200,
        gender: 'male',
        vaccinated: true,
        location: 'Delhi'
    },
    {
        name: 'Whiskers',
        species: 'cat',
        breed: 'Maine Coon',
        age: 5,
        description: 'Whiskers is a majestic Maine Coon with a gentle giant personality. He loves lounging and occasional playtime.',
        imageUrl: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=400',
        status: 'available',
        price: 350,
        gender: 'male',
        vaccinated: false,
        location: 'Indore'
    },
    {
        name: 'Bella',
        species: 'dog',
        breed: 'Labrador Retriever',
        age: 2,
        description: 'Bella is a playful and affectionate Lab mix who loves outdoor adventures and cuddles.',
        imageUrl: 'https://images.unsplash.com/photo-1555804736-60d71b084d57?w=400',
        status: 'available',
        price: 200,
        gender: 'male',
        vaccinated: true,
        location: 'Delhi'
    },
    {
        name: 'Snowball',
        species: 'rabbit',
        breed: 'Holland Lop',
        age: 1,
        description: 'Snowball is an adorable Holland Lop rabbit who loves to hop around and be petted. Very gentle and quiet.',
        imageUrl: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400',
        status: 'available',
        price: 400,
        gender: 'female',
        vaccinated: true,
        location: 'Delhi'
    },
    {
        name: 'Charlie',
        species: 'dog',
        breed: 'Beagle',
        age: 1,
        description: 'Charlie is a curious and merry Beagle puppy who loves to sniff and explore. Always happy and full of energy!',
        imageUrl: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400',
        status: 'available',
        price: 200,
        gender: 'male',
        vaccinated: true,
        location: 'Delhi'
    },
    {
        name: 'Mittens',
        species: 'cat',
        breed: 'Persian',
        age: 3,
        description: 'Mittens is a calm and regal Persian cat. She prefers a quiet home and loves gentle affection.',
        imageUrl: 'https://images.unsplash.com/photo-1508215885820-4585e56135c8?w=400',
        status: 'available',
        price: 500,
        gender: 'female',
        vaccinated: true,
        location: 'Delhi'

    },
    {
        name: 'Rocky',
        species: 'dog',
        breed: 'Rottweiler',
        age: 5,
        description: 'Rocky is a strong and loyal Rottweiler who loves protecting his family. He is well-trained and very obedient.',
        imageUrl: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400',
        status: 'available',
        price: 200,
        gender: 'male',
        vaccinated: true,
        location: 'Delhi'
    },
    {
        name: 'Coco',
        species: 'bird',
        breed: 'Cockatiel',
        age: 2,
        description: 'Coco is a cheerful Cockatiel who loves to whistle and mimic sounds. Very social and fun to have around.',
        imageUrl: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400',
        status: 'available',
        price: 400,
        gender: 'male',
        vaccinated: false,
        location: 'Delhi'
    },
    {
        name: 'Daisy',
        species: 'dog',
        breed: 'Poodle',
        age: 3,
        description: 'Daisy is an intelligent and elegant Poodle. She learns tricks quickly and loves spending time with people.',
        imageUrl: 'https://images.unsplash.com/photo-1598137267078-4c1c2f9e89e7?w=400',
        status: 'available',
        price: 1000,
        gender: 'male',
        vaccinated: true,
        location: 'Delhi'
    },
    {
        name: 'Leo',
        species: 'cat',
        breed: 'Bengal',
        age: 2,
        description: 'Leo is a playful Bengal cat with a wild look and energetic personality. Loves climbing and exploring.',
        imageUrl: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=400',
        status: 'available',
        price: 300,
        gender: 'male',
        vaccinated: true,
        location: 'Delhi'
    },
    {
        name: 'Nibbles',
        species: 'hamster',
        breed: 'Syrian Hamster',
        age: 1,
        description: 'Nibbles is a tiny and adorable hamster who enjoys running on his wheel and nibbling snacks.',
        imageUrl: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400',
        status: 'available',
        price: 200,
        gender: 'male',
        vaccinated: true,
        location: 'Delhi'
    },
    {
        name: 'Goldie',
        species: 'fish',
        breed: 'Goldfish',
        age: 1,
        description: 'Goldie is a bright orange goldfish who loves swimming around and is perfect for beginners.',
        imageUrl: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=400',
        status: 'available',
        price: 200,
        gender: 'male',
        vaccinated: true,
        location: 'Delhi'
    },
    {
        name: 'Shadow',
        species: 'dog',
        breed: 'Husky',
        age: 4,
        description: 'Shadow is a beautiful Siberian Husky with striking blue eyes. He loves cold weather and long walks.',
        imageUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400',
        status: 'available',
        price: 200,
        gender: 'male',
        vaccinated: true,
        location: 'Mumbai'
    },
    {
        name: 'Peanut',
        species: 'guinea pig',
        breed: 'American Guinea Pig',
        age: 2,
        description: 'Peanut is a sweet and gentle guinea pig who loves fresh veggies and cuddles.',
        imageUrl: 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=400',
        status: 'available',
        price: 900,
        gender: 'male',
        vaccinated: true,
        location: 'Mumbai'
    }
];

const seed = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/pet-adoption');
        console.log('Connected to MongoDB');

        await Promise.all([User.deleteMany({}), Pet.deleteMany({})]);
        console.log('Cleared existing data');

        await User.create({
            name: 'Admin User',
            email: 'admin@petadopt.com',
            password: 'admin123',
            role: 'admin'
        });

        await User.create({
            name: 'John Doe',
            email: 'user@petadopt.com',
            password: 'user123',
            role: 'user'
        });

        await Pet.insertMany(samplePets);

        console.log('✅ Seed completed!');
        console.log('📧 Admin: admin@petadopt.com / admin123');
        console.log('📧 User:  user@petadopt.com  / user123');
        process.exit(0);
    } catch (error) {
        console.error('Seed failed:', error);
        process.exit(1);
    }
};

seed();