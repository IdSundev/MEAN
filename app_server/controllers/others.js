/* GET 'about' page */
const about = (req, res) => {
  res.render('index', { title: 'About' });
}

// Export the index function as a method 
module.exports = {
  about
};