const express = require('express');
const app = express();

const PORT = 3800;
const hostname = "localhost";
app.get('/', (req, res) => {
    res.send('I am home page')
})
app.get('/about', (req, res) => {
    res.send("I am about page")
})
app.get('/contact', (req, res) => {
    res.send(`support@pwskills.com`)
})

app.listen(PORT, () => {
    console.log(`Server running at http://${hostname}:${PORT}`);
})