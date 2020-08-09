const express = require('express');
const bodyParser= require('body-parser');
const router=express.Router();

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.get('/add-product',(req,res,next)=>{
     res.send('<body><form action="/result" method="POST"><input type="number" name="title"><button>Find n most word</button></form></body>');
     });
app.use((req,res,next)=>{
    res.status(404).send('<h1>page not found</h1>');
});
app.listen(3000);
