const express = require("express");
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
// const UserDetails = require('../src/components/Homepage/userDetails.js');
// var router = express.Router();
 const dotenv= require('dotenv');
 const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = 5001;
// const Reports= require('../src/components/addReports/reports.js');
app.use(express.static(path.join(__dirname, '../build')));
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
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
const reportsSchema = mongoose.Schema({
    title: String,
    category: String,
    subcategory: String,
    author: String,
    year: String,
    imgsrc: String,
    link: String,
    month: String,
  });
const Reports = mongoose.model('reports', reportsSchema);  
app.post('/uploadreports', async(req, res) => {
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

// app.post('/updateImgSrc', async (req, res) => {
//     try {
//         // Update documents in the MongoDB collection
//         const result = await Reports.updateMany(
//             { imgsrc: { $regex: /\.png$/ } }, // Match documents with imgsrc ending with '.webp'
//             { $set: { imgsrc: { $regexReplace: { pattern: '.png$', replacement: '.webp' } } } } // Update imgsrc field
//         );

//         res.send(`${result.modifiedCount} documents updated successfully.`);
//     } catch (error) {
//         console.error('Error updating imgsrc:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });

const userDetailsSchema = mongoose.Schema({
    email: String
});

const UserDetails = mongoose.model('userdetails', userDetailsSchema);

app.post('/addDetails', async (req, res) => {
  
        const { email } = req.body;
        
        // Save the details to the database using UserDetails model
         UserDetails.create({
            email
        });

        res.status(200).send('Details added successfully.');

});

app.get('/reportspage', async (req, res) => {
    try {
        // Fetch reports from the database
        const reports = await Reports.find({}, {});
        
        // const reportCounts = await Reports.aggregate([
        //     {"$group": {_id: "$author", count: {$sum: 1}}}
        // ]).exec();
    
        // res.send(reportCounts)

            
        res.send(reports);
      
    } catch (error) {
        console.error('Error fetching reports:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.get('*',  () => {
    //sends index.html from the built foldercd 
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
