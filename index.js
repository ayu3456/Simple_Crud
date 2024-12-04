const express = require('express');
const dbConnect = require('./config/db');

const productRoutes = require('./routes/productRoutes.js');

const app = express();
app.use(express.json());
dbConnect();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use("/api",productRoutes);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
