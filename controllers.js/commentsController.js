const commentModel = require("../models/commentModel");
const filmModel = require("../models/filmModel");


const getFilmComments=(req,res)=>{
    film=req.body;
    filmModel.findOne(film).then(result=>{
        console.log(film)
        if(result){
            console.log(result);
            commentModel.find({film:result._id}).then(comments=>{
                res.json(comments);
            });
        }else{
            res.json(false);
        }
    })
}
const addComment=(req,res)=>{
    comment=req.body;
    filmModel.findOne(comment.film).then(result=>{
        if(result){
            comment.film=result._id;
            newComment=new commentModel(comment);
            newComment.save().then(reponse=>{
            res.json(reponse);
    })
        }else{
            newFilm= new filmModel(comment.film);
            newFilm.save().then(film=>{
                comment.film=film._id;
                newComment=new commentModel(comment);
                newComment.save().then(reponse=>{
                res.json(reponse);
            })
        })
        
    }
    
    })}
module.exports ={getFilmComments,addComment};