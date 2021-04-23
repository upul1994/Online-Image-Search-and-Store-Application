const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const Client = require('node-rest-client').Client;


const app = express()
app.use(cors())
app.use(bodyParser.json())


const connection =require("./config/DbConnection")





app.route("/all").post((req, res) => {

  const client = new Client();

  const receivedData = req.body.value 

  client.get("http://pixabay.com/api/?key=21105691-36e6b53ae604dd131c3f2a937&q=" + receivedData + "&image_type=photo",

    function (data, response) {

      if(data){
        res.status(200).json( data.hits )
      }else{
        res.status(404).json({error:"not found"})
      }
     

    });


})



app.route("/getdatabyid/:id").post((req, res) => {

  const client = new Client();

  const id = req.params.id
  const q =req.body.data
  
  client.get("http://pixabay.com/api/?key=21105691-36e6b53ae604dd131c3f2a937&q=" + q + "&image_type=photo&id="+id,

    function (data, response) {

      if(data){
        res.status(200).json( data.hits )
      }else{
        res.status(404).json({error:"not found"})
      }
     

    });


})



app.route("/add").post((req,res)=>{

const imageData ={
  imageUrl:req.body.imageUrl,
  name:req.body.name
}

connection.query("INSERT INTO galary SET?",imageData, (err,result)=>{
  if(err) throw err;
  res.status(200).json({msg:"image data saved sucessfully"})
})


})


app.route("/show").get((req,res)=>{
  connection.query("SELECT * FROM galary",(err,row)=>{
      if(err) throw err;
      res.status(200).json(row)
  })
})

app.route("/delete/:id").delete((req,res)=>{
  const rowId =req.params.id
  connection.query("DELETE FROM galary WHERE id="+rowId,(err,result)=>{
    if(err) throw err;
    res.status(200).json({msg:"image data deleted successfully"})
  })
})


app.route("/edit/:id").get((req,res)=>{
  const id =req.params.id
  connection.query("SELECT * FROM galary WHERE id="+id,(err,row)=>{
    if(err) throw err;
    res.status(200).json(row);
  })
})


app.route("/update/:id").put((req,res)=>{

  const id = req.params.id

  const updateData ={
    name:req.body.name
  }


  connection.query("UPDATE galary SET? WHERE id=?",[updateData,id],(err,result)=>{
    if(err) throw err;
    res.status(200).json({msg:"image data updated successfully"})
  })
})




const port = 5000;
app.listen(port, () => {
  console.log("app listen to port :", port)
})