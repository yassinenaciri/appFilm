const mongoose = require('mongoose');
mongoose.set("debug", true);
mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost:27017/appfilms", { useNewUrlParser: true })
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