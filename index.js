const express =require ("express");
const pool =require("./config")
const app= express();
const cors= require("cors");
const port = process.env.PORT || 5000 ; 

// global middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Allow cors policies
app.use(cors())


app.get("/api", (req,res)=>{
    res.send ("hey, how are you!")
});

app.get("/countries", (req,res)=>{
    pool.getConnection (function (err, connection){
        if (err) console.error(err);
        connection.query("SELECT * FROM country", (err,results) =>{
            if(err){
                res.status(500).send("Server error, could not fetch countries")
            }else{
                res.json (results)
            }
        })

        connection.release();
        if (err) console.error(err)
    })
    
});
 


app.listen(port,(err)=>{
    if(err) throw new Error("Something failed")
    console.log(`Server is running on port ${port}`)
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'))
    });
}
