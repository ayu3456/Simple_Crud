const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config()

const dbConnect = async () => {
  try {
    
    const connection = await mongoose.connect(
      "mongodb+srv://ayushg23csai:n6ZJTiEQpX3KASFY@cluster0.ammb6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      
    );

    // Log success message
    console.log(`Database connected`);
  } catch (err) {
    // Log error and exit process
    console.error(`Database connection error: ${err.message}`);
    process.exit(1);
  }
};

// Export the dbConnect function
module.exports = dbConnect;
