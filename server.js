const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3000;
const MongodbURI = "mongodb+srv://sunil:sunil123@cluster0.df1iq.mongodb.net/";

//parshing JSON requests
app.use(express.json());


//Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });