const Dish = require('../models/dishModels');


//1. Get
const getAlldishes = async (req, res) => {
    try {
        const dishes = await Dish.find();
        res.status(200).json(dishes);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//2. Create
const createDish = async (req, res) => {
    try {
        const newDish = await Dish.create(req.body);
        res.status(201).json(newDish);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

//3. Get One
const getDishById = async (req, res) => {
    try {
        const dish = await Dish.findById(req.params.id);
        if (!dish)
        res.status(200).json(dish);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//4. Update
const updateDish = async (req, res) => {
    try {
        const dish = await Dish.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!dish) return res.status(404).json({message: 'Dish not found'});
        res.status(200).json(dish);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

//5. Delete
const deleteDish = async (req, res) => {
    try {
        const dish = await Dish.findByIdAndDelete(req.params.id);
        if (!dish) return res.status(404).json({message: 'Dish not found'});
        res.status(200).json({message: 'Dish deleted successfully'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports = {
    getAlldishes,
    createDish,
    getDishById,
    updateDish,
    deleteDish,
};