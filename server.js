// https://medium.com/@hellotunmbi/how-to-deploy-angular-application-to-heroku-1d56e09c5147
// https://blog.angular-university.io/angular-push-notifications/
const express = require('express');
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const path = require('path');
const webpush = require('web-push');

const NOTIFICATIONS_COLLECTION = 'notifications';

webpush.setVapidDetails(
    'mailto:moin@frot.io',
    'BBqTVCz44SYRYuFLopkKdG_rT2izyEMsRbZmluXBAVYM25TmQvVz3tTd18a-02GZmiiYBUZHGq7LmD5qGbs0mMo',
    process.env.VAPID_PRIVATE_KEY
);

const app = express();
app.use(bodyParser.json());

app.use(express.static(__dirname + '/dist/ramstein-conference-app'));

var db;

mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/test", function (err, client) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  db = client.db();
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    console.log("App now running on port ", server.address().port);
  });
});

/* Generic error handler function */
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

/* Add subscribers */
app.post("/api/notifications", function(req, res) {
  var notification = req.body;

  db.collection(NOTIFICATIONS_COLLECTION).insertOne(notification, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to add subscriber");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

/* Send push notification to subscribers */
app.route('/api/newsletter').post(function(req, res) {
  db.collection(NOTIFICATIONS_COLLECTION).find({}).toArray(function(err, subscribers) {
    if (err) {
      handleError(res, err.message, "Failed to get subscribers.");
      return;
    }

    console.log('Total subscriptions: ', subscribers.length);

    const notificationPayload = {
      "notification": {
        "title": "Ramstein",
        "body": "This is a push notification",
        "icon": "assets/logo-startpage.png",
        "vibrate": [100, 50, 100],
        "data": {
          "dateOfArrival": Date.now(),
          "primaryKey": 1
        },
        "actions": [{
          "action": "explore",
          "title": "Go to the site"
        }]
      }
    };

    Promise.all(
      subscribers.map(sub => webpush.sendNotification(sub, JSON.stringify(notificationPayload)))
    )
    .then(() => res.status(200).json({message: 'Newsletter sent successfully.'}))
    .catch(err => {
      handleError(res, err.message, "Failed to send notifications.");
    });
  });
});

/* Everything else (e.g. assets) */
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/ramstein-conference-app/index.html'));
});
