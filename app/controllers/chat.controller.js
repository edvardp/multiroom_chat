module.exports.iniciarChat = function (app, req, res) {
    var dados = req.body;
    req.assert('apelido', 'O preenchimento do Nome ou Apelido é obrigatório!').notEmpty();
    req.assert('apelido', 'O preenchimento do Nome ou Apelido deve conter entre 2 e 20 caractéres!').len(2, 20);

    var errors = req.validationErrors();

    if (errors) {
        res.render('index', { errors });
        return;
    }

    user = {
        nickname: dados.apelido
    }

    app.get('io').emit('enviarMensagemParaCliente', {user: user, msg: 'entrou no chat!'});

    res.render('chat', { user });

}