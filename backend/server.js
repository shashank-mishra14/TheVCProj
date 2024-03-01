

const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
// var router = express.Router();
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;
const Reports= require('../src/components/addReports/reports.js');
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/TheVCProject', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});
app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

const fileSchema = new mongoose.Schema({
    filename: String,
    path: String
});


const File = mongoose.model('File', fileSchema);

// Endpoint for file upload
app.post('/upload', upload.single('document'), async (req, res) => {
    try {
        // Logic to handle file upload
        const file = req.file;

        // Create a new document in MongoDB
        const newFile = new File({
            filename: file.originalname,
            path: file.path
        });
        await newFile.save();

        res.send('File uploaded successfully.');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/addreports', async(req, res) => {
    const { title, category, subcategory,author, year,imgsrc,link } = req.body;
    Reports.create({
        title,
        category,
        subcategory,
        author,
        year,
        imgsrc,
        link,
    });
    
    res.send('Report added successfully.');
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
