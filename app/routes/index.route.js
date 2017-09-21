(function () {
    module.exports = function (app) {
        app.get('/', (req, res) => {
          app.app.controllers['index.controller'].index(app,req,res);
        });
    }
})();