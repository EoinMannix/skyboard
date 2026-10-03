const dashboard = function(req, res){
res.render('dashboard', { title: 'SkyBoard' });
};

module.exports = {
dashboard
};