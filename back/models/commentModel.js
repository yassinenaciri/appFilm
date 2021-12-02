const mongoose = require('mongoose');
mongoose.set("debug", true);
mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost:27017/appFilm", { useNewUrlParser: true })
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });



const commentSchema = new mongoose.Schema(
  {
    message :String,
    dateCreation :String,
    createur:{type:mongoose.Schema.Types.ObjectId, ref:'user',required:true },
    film:{type:mongoose.Schema.Types.ObjectId, ref:'film',required:true },
  }
);

const comment = mongoose.model("comment", commentSchema);

module.exports = comment;