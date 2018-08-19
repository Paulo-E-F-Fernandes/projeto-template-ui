var express = require("express");

// Criando o link para o diretório de build Angular
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));


// Inicializar o app.
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("Server started on port ", port);
});