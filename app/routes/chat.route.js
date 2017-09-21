(function () {
    module.exports = function (app) {
        app.get('/chat', (req, res) => {
            app.app.controllers['chat.controller'].iniciarChat(app, req, res);
        });

        app.post('/chat', (req, res) => {
            app.app.controllers['chat.controller'].iniciarChat(app, req, res);
        });
    }
})();