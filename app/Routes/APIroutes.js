var mysql = require("mysql");
//THIS IS JUST LOCAL CONNECTION. NEED TO FOLLOW HEROKU/MY SQL INTERFACE
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3307,
    user: "root",
    password: "root",
    database: "friendfinder_db"
  });
}

// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    // Selects all of the data from the MySQL profiles table
    loadProfiles(res);
  });
  app.post("/api/friends", function(req, res) {
    // console.log(req.body);
    findMatch(req.body, friends);
  });
};
var friends;
function loadProfiles(response) {
  connection.query("SELECT * FROM profiles", function(err, result) {
    if (err) throw err;

    friends = result;
    response.json(friends);
  });
  console.log(friends);
}

function findMatch(userData, friends) {
  console.log(userData);
  console.log(friends);

  module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
      // Selects all of the data from the MySQL profiles table
      loadProfiles(res);
    });
    app.post("/api/friends", function(req, res) {
      // console.log(req.body);
      findMatch(req.body, friends);
    });
  };
  var friends;
  function loadProfiles(response) {
    connection.query("SELECT * FROM profiles", function(err, result) {
      if (err) throw err;

      friends = result;
      response.json(friends);
    });
    console.log(friends);
  }

  function findMatch(userData, friends) {
    console.log(userData);
    console.log(friends);
  }
}
