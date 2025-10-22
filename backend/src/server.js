const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')

const databaseUrl = 'mongodb://127.0.0.1:27017/developer_api'

const app = express()



app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.post('/api/profiles', async (req,res) => {
    const body = req.body
    try{
        createProfile(body)
        res.status(201).json({message:'User added successfully'})

    }catch(err) {
        res.status(500).json({err:'Internal Server Error'})
    }
})

app.get('/api/profiles', async (req,res) => {
    try{
        const profiles =  await getProfiles()
        res.status(201).json({message:'Sucess',
            data:profiles
        })

    }catch(err) {
        res.status(500).json({err:'Internal Server Error'})

    }
    
})

app.get('/api/profiles/search', async (req,res) => {
    const query = req.query
    try{
       const profiles = await searchProfiles(query)
        res.status(201).json({message:'Sucess',
            data:profiles
        })

    }catch(err) {
        res.status(500).json({err:'Internal Server Error'})

    }
})

app.get('/api/profiles/:id', async (req,res) => {
    const id = req.params.id
    try{
        const profile = await getProfileById(id)
        res.status(201).json({message:'Sucess',
            data:profile
        })

    }catch(err) {
        res.status(500).json({err:'Internal Server Error'})

    }
    
})

app.put('/api/profiles/:id', async (req,res) => {
    const body = req.body
    const id = req.params.id

    try{
        const value = await updateById(id,body)
        if(value === null) return res.status(404).json({err:`User with ID:${id} not found`})
        res.status(201).json({message:'Sucess'})

    }catch(err) {
        console.log(err)
        res.status(500).json({err:'Internal Server Error'})

    }
})



main().catch(err => console.log(err));

async function main() {
    try{
        await mongoose.connect(databaseUrl)

    }catch(err){
        console.error(err)
    }
}

const talentSchema = new mongoose.Schema({  
    name:String, 
    email:String, 
    location:String,
    skills: [String], 
    experienceYears:Number,
    availableForWork: Boolean,
    hourlyRate:Number 
})

const Talent = mongoose.model('Talent',talentSchema)

async function createProfile({ name, email, location, skills, experienceYears, availableForWork, hourlyRate}) {
    const newTalent = new Talent({ name, email, location, skills, experienceYears, availableForWork, hourlyRate})
    // We will the error in the route handler so we don't use try catch here
        await newTalent.save()
}

async function getProfiles() {
    const profiles = await Talent.find()
    return profiles
}

async function getProfileById(id) {
    const profile = await Talent.findById(id)
    return profile
}

async function updateById(id,{ name, email, location, skills, experienceYears, availableForWork, hourlyRate}) {
    const profile = await Talent.findById(id)
    if(profile) {
        await Talent.updateOne({_id:new mongoose.Types.ObjectId(`${id}`)},{ name, email, location, skills, experienceYears, availableForWork, hourlyRate})
        return id
    }
    return null
}

async function searchProfiles(query){
    const profiles = await Talent.find(query)
    return profiles
}

module.exports = app;


app.listen(3001, (err)=> {
    console.log('Server started')
})

