const filmModel = require("../models/filmModel");
const userModel = require("../models/userModel");
const url = require('url');
const findFilmById=(req,res)=>{
    filmModel.findById(req.params.id).then(result=>{
        res.json({message :"film " ,data :  result});
    })
}

const getFilms =(req,res)=>{
    idUser=url.parse(req.url,true).query.userId;
    userModel.findById(idUser).then(user=>{
        filmModel.find({ "_id": { $in: user.favoris } }).then(result=>{
            res.json(result);
        }).catch(err=>res.status(400));
    })
    
}


const createFilm =(req,res)=>{
    let newFilm = new filmModel(req.body.film);
    userId=req.body.userId;
    userModel.findById(userId).then(user=>{
        newFilm.save().then(result=>{
            user.favoris.push(result._id);
            user.save();
            res.status(200).json(result);
        }).catch(err=>res.status(400));
    })
}


const deleteFilm =(req,res)=>{
    let idFilm= req.params.id;
    filmModel.findByIdAndDelete(idFilm).then(result=>{
        res.status(202)
    }).catch(err=>res.status(400));
}

const updateFilm =(req,res)=>{

}

module.exports ={findFilmById,getFilms,deleteFilm,updateFilm,createFilm}
