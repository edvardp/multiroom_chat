(function () {

    module.exports.index = function (app, req, res) {
        res.render('index.ejs', { errors: undefined });
    }

})();