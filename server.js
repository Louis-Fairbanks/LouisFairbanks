const express = require('express');


app = express();
app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.listen(3000, (req, res) => console.log('Server started on port 3000'));

app.route('/').get((req, res) => {
        res.sendFile(__dirname + "/public/index.html");
})

app.route('/es').get((req, res) => {
        res.sendFile(__dirname + '/public/spanish.html')
})