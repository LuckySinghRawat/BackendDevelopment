require('dotenv').config()

console.log("Lucky singh learning backend")

const express = require('express');
const app = express();
// const PORT = 3000;
const PORT = process.env.PORT;

// Route
app.get('/', (req, res) => {
  res.send('Hello Lucky, Express is running!');
});

app.get('/lucky',(req,res) => {
    res.send('now you got page to LUCKY')
})

app.get('/lucky/login',(req,res) => {
    res.send('now you got page to LUCKY now can you login')
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
