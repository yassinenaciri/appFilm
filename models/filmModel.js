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



const filmSchema = new mongoose.Schema(
  {
    original_title :String,
    poster_path :String,
    overview:String,
    release_date:String,
    vote_average: Number,
  }
);

const film = mongoose.model("film", filmSchema);

module.exports = film;