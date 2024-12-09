const express = require('express');
const path = require('path');
const router = express.Router();

// Route 1: Google (HTML format)
router.get('/Google', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../Websites/Google.html'));
});

// Route 2: Amazon (HTML format)
router.get('/Amazon', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../Websites/Amazon.html'));
});

// Route 3: Facebook (HTML format)
router.get('/Facebook', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../Websites/Facebook.html'));
});

// Route 4: Twitter (HTML format)
router.get('/Twitter', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../Websites/Twitter.html'));
});

// Route 5: YouTube (HTML format)
router.get('/Youtube', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../Websites/Youtube.html'));
});

// Route 6: Home Page (JSON format)
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Home Page' });
});

// Route 7: About Us Page (JSON format)
router.get('/about', (req, res) => {
  res.status(200).json({ message: 'About Us: We are a fictional website!' });
});

// Route 8: Contact Us Page (JSON format)
router.get('/contact', (req, res) => {
  res.status(200).json({ message: 'Contact Us at contact@website.com' });
});

module.exports = router;
