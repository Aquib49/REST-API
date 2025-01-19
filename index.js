const  express = require("express");
const app= express();
const path = require("path")
const { v4: uuidv4 } = require('uuid');

const methodOverride = require('method-override')
app.use(methodOverride('_method'))

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"))
app.use(express.urlencoded({ extended: true }));


const port = 8080;

let posts= [
    {
        id:uuidv4(),
        username:"Aquib",
        contenet:"I Love My Islam"
    },
    {
        id:uuidv4(),
        username:"Aquib",
        contenet:"I Love My Islam"
    },
    {
        id:uuidv4(),
        username:"Aquib",
        contenet:"I Love My Islam"
    },
    {
        id:uuidv4(),
        username:"Aquib",
        contenet:"I Love My Islam"
    },
    {
        id:uuidv4(),
        username:"Aquib",
        contenet:"I Love My Islam"
    },
    {
        id:uuidv4(),
        username:"Aquib",
        contenet:"I Love My Islam"
    },
    {
        id:uuidv4(),
        username:"Aquib",
        contenet:"I Love My Islam"
    },
    
]




app.get("/posts",(req,res)=>{
    res.render("posts.ejs",{posts})
})


app.get("/posts/new",(req,res)=>{
    res.render("new.ejs")
    
})

app.post("/posts",(req,res)=>{
 let {username,contenet} = req.body;
 let id =uuidv4()
    posts.push({id,username,contenet})
    res.redirect("/posts")
    
})
app.get("/posts/:id",(req,res)=>{
    let {id}= req.params;
    let post = posts.find((p) => id === p.id )
    res.render("show.ejs",{post})
})

app.patch("/posts/:id",(req,res)=>{
    let {id}= req.params;
    let newcon= req.body.contenet
    let post = posts.find((p) => id === p.id )
    post.contenet= newcon
    console.log(post)
    res.redirect("/posts")
})

app.get("/posts/:id/edit",(req,res)=>{
    let {id}= req.params;
    let post = posts.find((p) => id === p.id )
    res.render("edit.ejs",{post})
   

})
app.delete("/posts/:id/",(req,res)=>{
    let {id}= req.params;
  posts = posts.filter((p) => id !== p.id )
  res.redirect("/posts")

})

app.listen(port,(req,res)=>{
    console.log("app is listening on port :8080")
})
