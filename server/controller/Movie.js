  
const Movie = require("../model/mongo/Movie")
const list = async (req, res,next) => {
    try {
        const {skip=0,limit=10} =req.query
      
        const {year,directors,title}=req.query
    const criteria = {}
    if (year) {
        criteria.year = year
    }
    if (directors) {
        criteria.directors = directors
    }
    if (title) {
        criteria.title = title
    }

    res.json({
        count: await Movie.countDocuments(criteria),
        items: await Movie.find(criteria).skip(parseInt(skip)).limit(parseInt(limit))
    })
    } catch (error) {
       next(error) 
    }
    
}
const getById = async (req, res,next) => {
    try {
        console.log(req.params.id)
        res.json({
            item: await Movie.findById(req.params.id)
        })
    } catch (error) {
        next(error)
    }
   
}
module.exports = {
    list,
    getById
}