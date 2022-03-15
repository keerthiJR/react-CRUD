import myexpress from 'express'
const app = myexpress()
app.use(myexpress.json())
//mongodb is module.mongoclient is class inside the module mongodb and connect is a method
import cors from 'cors'
app.use(cors({
    origin: '*'
}))


import mymongodb from 'mongodb';
const MymongoClient = mymongodb.MongoClient
const url = 'mongodb://127.0.0.1:27017/'
var mydatabase
MymongoClient.connect(url, (err, mydb) => {
    if (err) throw err
    console.log('connection successfull')
    mydatabase = mydb.db('react')
    app.listen(3001)
})


//Get method
app.get('/', (req, res) => {
    mydatabase.collection('batch1').find().toArray((err, result) => {
        if (err) throw err
        res.send(result)
    })
})
//Get method hard code
// app.get('/getc',(req,res)=>{
//     const somecond = {"stud_name":"abarna"}
//     mydatabase.collection('batch1').find(somecond).toArray((err,result)=>{
//         if(err) throw err
//         res.send(result)
//     })
//    })
//Get method based on condition
app.get('/getc', (req, res) => {
    const a = req.body.name
    const b = req.body.std
    const somecond = { $and: [{ "stud_name": a }, { "stud_std": b }] }
    mydatabase.collection('batch1').find(somecond).toArray((err, result) => {
        if (err) throw err
        res.send(result)
    })
})
//get method in the form of query parameter
app.get('/getque', (req, res) => {
    const a = req.query.name
    const b = req.query.std
    const somecond = { $and: [{ "stud_name": a }, { "stud_std": b }] }
    mydatabase.collection('batch1').find(somecond).toArray((err, result) => {
        if (err) throw err
        res.send(result)
    })
})
//get method in the form of uri parameter
app.get('/geturi/:name/:std', (req, res) => {
    const a = req.params.name
    const b = req.params.std
    console.log(a)
    console.log(b)
    const somecond = { $and: [{ "stud_name": a }, { "stud_std": b }] }
    mydatabase.collection('batch1').find(somecond).toArray((err, result) => {
        if (err) throw err
        res.send(result)
    })
})
app.post('/post', (req, res) => {
    mydatabase.collection('batch1').insertOne(req.body, (err) => {
        if (err) throw err
        res.send("data inserted successfully")
    })
})
//insert data based on fron end i.e react
app.post('/postreact', (req, res) => {
    console.log("dsfsf");
    const abc = {
        "stud_id": req.body.id,
        "stud_name": req.body.name,
        "stud_age": req.body.age,
        "stud_section": req.body.sec,
        "stud_std": req.body.std,
        "stud_gender": req.body.gen
    }
    mydatabase.collection('batch1').insertOne(abc, (err) => {
        if (err) throw err
        res.send("Data Inserted successfully")
    })
})
// app.delete('/delete', (req, res) => {
//     const abc = { "stud_id": req.body.id }
//     mydatabase.collection('batch1').findOneAndDelete(abc, (err) => {
//         if (err) throw err
//         res.send("data deleted successfully")
//     })
// })
//updateOne===FindOneAndUpdate
//updateMany === FindManyAndUpdate
// app.put('/put', (req, res) => {
//     mydatabase.collection('batch1').findOneAndUpdate(
//         { "stud_id": req.body.id },
//         { $set: { "stud_name": req.body.name } },
//         { upsert: true },//if id exists it will update or it create new one
//         (err) => {
//             if (err) throw err
//             res.send("data updated successfully")
//         })
// })
//method and action
// app.post('/endpoint',(req,res)=>{
//     var a=req.body.name
//     console.log(req.body.password)
// })
// app.listen(3001)

app.put('/put',(req,res)=>{
    mydatabase.collection('batch1').findOneAndUpdate(
        {"stud_id": req.body.id},
        {$set: {"stud_name":req.body.name}},
        {upsert:true},//if id exists it will update or it create new one
        (err)=>{
        if(err) throw err
        res.send("data updated successfully")
    })
})
app.patch('/patch',(req,res)=>{
    mydatabase.collection('batch1').update(
        {"stud_id": req.body.id},
        {$set: {"stud_name":req.body.name}},
        {upsert:true},//if id exists it will update or it create new one
        (err)=>{
        if(err) throw err
        res.send("data updated by patch successfully")
    })
})

app.delete('/delete',(req,res)=>{
    mydatabase.collection('batch1').findOneAndDelete({"stud_id":req.body.id},(err)=>{
        if(err) throw err
        res.send("data deleted successfully")
        console.log(res)
    })
})

app.delete('/delete/:myid',(req,res)=>{
    mydatabase.collection('batch1').findOneAndDelete({"stud_id":req.params.myid},(err)=>{
        if(err) throw err
        res.send("data deleted successfully")
        console.log(res)
    })
})