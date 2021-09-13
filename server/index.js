const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors.json());
app.use(express.json());

app.get('/api/users', (req,res) => {
    let friends = ['Obama', 'Biden', 'Cartman', 'Kenny', 'Butters', 'Kyle', 'Steve'];
    res.status(200).send(friends)
});

app.get('/weather/:temperature', (req, res) => {
    const {temperature} = req.params
    const phrase = `<h3>It was ${temperature} today</h3>`;
    res.status(200).send(phrase);
});

app.listen(4000, () => console.log('server running on port 4000'));