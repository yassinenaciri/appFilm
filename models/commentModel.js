const mongoose = require('mongoose');
mongoose.set("debug", true);
mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb+srv://yassinenaciri:yassinenaciri@cluster0.kdigw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true })
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