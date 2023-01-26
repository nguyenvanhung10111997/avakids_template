var express = require('express');
var path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(path.join(__dirname, './dist/landing-page')));
console.log('path', __dirname);
app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/landing-page/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, () => console.log('Server listening on port 8080'));
