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



const userSchema = new mongoose.Schema(
  {
    email:String,
    password:String,
    favoris:[mongoose.Schema.Types.ObjectId],
  }
);



const user = mongoose.model("user", userSchema);

module.exports = user;