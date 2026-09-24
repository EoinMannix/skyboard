/* GET home page */
const index = function(req, res){
    res.render('index', { title: 'Skyboard' });
};

module.exports = {
    index
};