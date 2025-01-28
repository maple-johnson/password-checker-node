// Import
import express from 'express';

// Instantiate
const app = express();

// Makes everything in the public folder usable
app.use(express.static('public'));

// Channel used for listen
const PORT = 3000;

// Setting up home page
app.get('/', (req, res) => {
     res.sendFile(`${import.meta.dirname}/views/home.html`);
});

// Where the server will listen
app.listen(PORT, () =>{
     console.log(`Server is running at http://localhost:${PORT}`);
});