(function () {
    /* Importar as configurações do servidor */
    const app = require('./config/server');
    /** Importar o Websocket - socket.io*/
    const websocket = require('socket.io');
    app.set('port', 8000);
    /** Parametrizar a porta de escuta */
    const server = app.listen(app.get('port'), logServerRunning());
    const io = websocket.listen(server);
    app.set('io', io);

    io.on('connection', (socket) => {
        socket.on('disconnect', () => {
            console.log('Usuário se desconectou!');
        });

        socket.on('enviarMensagemParaServidor', (data) => {
            socket.emit('enviarMensagemParaCliente', data);

            socket.broadcast.emit('enviarMensagemParaCliente', data);
        });
    });

    function logServerRunning() {
        console.log(`Servidor rodando na porta ${app.get('port')}`);
    }
})();