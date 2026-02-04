const express = require('express');
const router = express.Router();

const {
    getAlldishes,
    createDish,
    getDishById,
    updateDish,
    deleteDish,
} = require('../controllers/dishController');

// 1. Get All Dishes
router.get('/dishes', getAlldishes);

// 2. Create a New Dish
router.post('/dishes', createDish);     

// 3. Get a Dish by ID
router.get('/dishes/:id', getDishById);

// 4. Update a Dish by ID
router.put('/dishes/:id', updateDish);

// 5. Delete a Dish by ID
router.delete('/dishes/:id', deleteDish);

module.exports = router;