/* GET homepage */
const index = (req, res) => {
  res.render('index', { title: 'Express' });
}

// Export the index function as a method 
module.exports = {
  index
};