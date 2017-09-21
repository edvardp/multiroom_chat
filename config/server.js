(function () {

    /** Importar o módulo express */
    const express = require('express');
    /** Importar o módulo consign */
    const consign = require('consign');
    /** Importar o módulo body-parser */
    const bodyParser = require('body-parser');
    /** Importar o módulo express-validator */
    const expressValidator = require('express-validator');

    /** Iniciar o objeto express */
    app = express();

    /** setar as variáveis 'view engine' e 'views' do express */
    app.set('view engine', 'ejs');
    app.set('views', './app/public/views');

    /** Configurar o middleware express.static */
    app.use(express.static('./app/public'));

    /** Configurar o middleware body-parser */
    app.use(bodyParser.urlencoded({ extended: true }));

    /** Configurar o middleware express-validator */
    app.use(expressValidator());

    /** Efetua o autoload das rotas, dos models e dos controllers para o objeto app */
    consign()
        .include('app/routes')
        .then('app/models')
        .then('app/controllers')
        .into(app);

    /** Exportar o objeto app */
    module.exports = app;

})();
