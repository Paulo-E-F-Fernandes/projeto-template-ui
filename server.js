const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/projeto-template-ui'));

app.get('/*', (request, response) => {
    response.sendFile(path.join(__dirname, '/dist/projeto-template-ui/index.html'));
});

app.listen(process.env.PORT || 8080, () => {
    console.log('Server started');
});