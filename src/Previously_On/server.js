var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var fileUpload = require("express-fileupload");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(fileUpload());

//// CONNECTION DB
var mongoose = require("mongoose");
var options = { server: { socketOptions: { connectTimeoutMS: 30000 } } };

mongoose.connect(
  "mongodb://127.0.0.1:27017/mytvlist",
  { useMongoClient: true },
  function(err) {
    if (err) {
      console.log("erreur : " + err);
    } else {
      console.log("connecté a la base de données mytvlist");
    }
  }
);
  
// schemas
var nutSchema = mongoose.Schema({
  nutFromDB_id: Number,
  likeByUser: String
});
var userSchema = mongoose.Schema({
  usermail: String,
  username: String,
  userpassword: String, 
  date_of_birth: Date,
  member_since: Date, 
  profile_picture: String,
  gender: Array, 
  user_location: String
});

// models
var NutModel = mongoose.model("nuts", nutSchema);
var UserModel = mongoose.model("users", userSchema);
var users = [];

// "migration"
nutz = new NutModel; 
nutz.save();
usars = new UserModel;
usars.save();

app.get("/", function(req, res) {
  res.render("index");
});

app.post("/findnuts", function(req, res) {


  var nutIDsFromDB = [];

  NutModel.find({ likeByUser: req.body.user_id } ,function(err, nuts) {
    for (var i = 0; i < nuts.length; i++) {
      nutIDsFromDB.push(nuts[i].nutFromDB_id);
    }
    res.json(nutIDsFromDB);
  });
});

app.post("/addfav", function(req, res) {
  console.log('id reçu' + req.body.nut_id)

  var newNut = new NutModel({
    nutFromDB_id: req.body.nut_id,
    likeByUser: req.body.user_id
  });

  newNut.save(function(error, nut) {
    if (error) {
      console.log(error);
    } else {
      console.log("save show in DB ok : " + nut);
      res.json(nut);
    }
  });
});

app.post("/delfav", function(req, res) {

  NutModel.remove({ nutFromDB_id: req.body.nut_id, likeByUser: req.body.user_id }, function(error, nut) {
    if (error) {
      console.log(error);
    } else {
      console.log("remove show from DB ok : " + nut);
    res.json(nut);
    }
  });
});

app.post("/login", function(req, res) {
  var test = "ko";
  if (
    req.body.email != undefined &&
    req.body.email != "undefined" &&
    req.body.email != "" &&
    req.body.password != undefined &&
    req.body.password != "" &&
    req.body.password != "undefined"
  ) {
    UserModel.find(function(err, userlist) {
      for (var i = 0; i < userlist.length; i++) {
        if (
          req.body.email == userlist[i].usermail &&
          req.body.password == userlist[i].userpassword
        ) {
          test = userlist[i]._id;
        } else {
        }
      }
      res.json(test);
    });
  } else {
    res.json(test);
  }
});

app.post("/signup", function(req, res) {
  var query = UserModel.findOne({ usermail: req.body.email });
  query.exec(function(error, checkexist) {
    if (checkexist == undefined) {
      var newUser = new UserModel({
        usermail: req.body.email,
        userpassword: req.body.password,
        username: req.body.username,
        date_of_birth: req.body.date_of_birth
      });
      newUser.save(function(error, savedUser) {
        if (error) {
          console.log(error);
        } else {
          console.log("save DB ok" + savedUser);
          res.json(savedUser);
        }
      });
    } else {
      res.json(error);
    }
  });
});

app.get("/home", function(req, res) {
  res.render("index");
});

app.get("/mylist", function(req, res) {
  res.render("index");
});

app.get("/about", function(req, res) {
  res.render("index");
});

app.get("/affichageseriesingle", function(req, res) {
  res.render("index");
});

app.get("/signuplogin", function(req, res) {
  res.render("index");
});

app.get("/logout", function(req, res) {
  res.render("index");
});

var port = process.env["PORT"] || 8000;

app.listen(port, function() {
  console.log("Server listening on port 8000");
});