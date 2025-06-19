const Hotel = require('../models/Hotel');

exports.createHotel = async (req, res) => {
  try {
    const hotel = new Hotel({
      ...req.body,
      image: req.file ? req.file.filename : null
    });
    
    await hotel.save();
    res.status(201).json(hotel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getDashboardStats = async (req, res) => {
  try {
    const totalHotels = await Hotel.countDocuments();
    res.json({
      totalHotels,
      totalForms: 125,
      totalMessages: 40,
      totalUsers: 600
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};