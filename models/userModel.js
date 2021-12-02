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



const userSchema = new mongoose.Schema(
  {
    email:String,
    password:String,
    favoris:[mongoose.Schema.Types.ObjectId],
  }
);



const user = mongoose.model("user", userSchema);

module.exports = user;