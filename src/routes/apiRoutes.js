const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const chefController = require('../controllers/chefController');

const {
    getAllDishes,
    createDish,
    getDishById,
    updateDish,
    deleteDish,
} = require('../controllers/dishController');

// Health check endpoint
router.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Server is running' });
});

router.get('/dishes', getAllDishes);
router.post('/dishes', createDish);
router.get('/dishes/:id', getDishById);
router.put('/dishes/:id', updateDish);
router.delete('/dishes/:id', deleteDish);
router.get('/chefs', chefController.getAllChefs);
router.post('/chefs', chefController.createChef);


=======
const rooms = require('../models/roomModels');

//Get
router.get('/rooms', (req, res) => {
  const { type, price, isBooked, feature } = req.query;

  const filteredRooms = rooms
    .filter(
      room =>
        !type || room.type.toLowerCase() === type.toLowerCase()
    )
    .filter(
      room =>
        !price || room.price <= parseFloat(price)
    )
    .filter(
      room =>
        isBooked === undefined ||
        room.isBooked === (isBooked === 'true')
    )
    .filter(
      room =>
        !feature ||
        room.feature.some(f =>
          f.toLowerCase() === feature.toLowerCase()
        )
    );

  if (filteredRooms.length === 0) {
    return res.status(404).json({
      status: 404,
      message: 'No rooms found matching the criteria',
    });
  }

  res.status(200).json({
    status: 200,
    message: 'Retrieved rooms successfully',
    data: filteredRooms,
  });
});

router.post('/rooms', (req, res) => {
  const { type, price, isBooked, feature } = req.body || {};


  if (
    !type ||
    price === undefined ||
    isBooked === undefined ||
    !Array.isArray(feature)
  ) {
    return res.status(400).json({
      status: 400,
      message:
        'Bad Request: Type, Price, IsBooked, and Feature are required',
    });
  }

  const newRoom = {
    id: rooms.length + 101,
    type,
    price,
    isBooked,
    feature,
  };

  rooms.push(newRoom);

  res.status(201).json({
    status: 201,
    message: 'Room created successfully',
    data: newRoom,
  });
});

router.put('/rooms/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = rooms.findIndex(room => room.id === id);

  if (index === -1) {
    return res.status(404).json({
      status: 404,
      message: `Room with ID ${id} not found`,
    });
  }

  rooms[index] = {
    id,
    ...req.body,
  };

  res.status(200).json({
    status: 200,
    message: 'Room updated successfully',
    data: rooms[index],
  });
});

router.delete('/rooms/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = rooms.findIndex(room => room.id === id);

  if (index === -1) {
    return res.status(404).json({
      status: 404,
      message: `Room with ID ${id} not found`,
    });
  }

  rooms.splice(index, 1);

  res.status(200).json({
    status: 200,
    message: 'Room deleted successfully',
  });
});

>>>>>>> ce62fd17a920762a782d9b5b99cb1b56be496c09
module.exports = router;