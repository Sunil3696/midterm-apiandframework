const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./src/routes/userRoutes");
const fs = require('fs');
const User = require("./src/models/userModel");
const app = express();

const PORT = process.env.PORT || 3000;
const MongodbURI = "mongodb+srv://sunil:sunil123@cluster0.df1iq.mongodb.net/";

mongoose
  .connect(MongodbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("you are Connected to MongoDB"))
  .catch((err) => console.error(err));

//parshing JSON requests
app.use(express.json());

const data = JSON.parse(fs.readFileSync('./users.json', 'utf-8'));

const importUsers = async (req, res) => {
    try {
        const count = await User.countDocuments();
        if (count === 0) {
            await User.create(data);
            console.log('Data successfully imported to MongoDB');
            res.status(200).send('Data successfully imported');
        } else {
            console.log('Data already in the database');
            res.status(200).send('Data already in the database');
        }
    } catch (e) {
        console.error('Error importing data', e);
        res.status(500).send('Error importing data');
    }
};

app.get('/import-users', importUsers);



app.use("/", userRoutes); //Base URL for recipe

//Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
