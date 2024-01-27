const express=require('express');
const dotenv=require('dotenv');
const conn=require('./db/config.js');
const authRouter=require('./router/authRouter.js')
const userRouter=require('./router/userRouter.js')
const cors=require('cors');
dotenv.config();

const app = express();
const bodyParser = require("body-parser");

// app.use(cors({orgin:'http://localhost:3000'}))
app.use('/',express.static(__dirname + '/public'));

app.use('/uploads',express.static(__dirname + '/uploads'));
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use(authRouter);
app.use(userRouter);

conn().then(() => {
    app.listen(process.env.PORT, error => {
        if(error) {
            console.log(error);
            return;
        }
        console.log("Server started at port " +process.env.PORT);
    });
})
.catch(error => {
    console.log(error);
})