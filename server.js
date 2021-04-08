require('dotenv').config();
const express=require('express');
var cors = require('cors')

const app=express();
app.use(cors())

const connectDB=require('./config/database');
const productRoutes=require('./routes/productRoutes');



connectDB();
app.use(express.json());
app.use('/api/products',productRoutes)

const PORT=process.env.PORT||5000;
app.listen(PORT,()=>console.log(`server is running on the port ${PORT}`));