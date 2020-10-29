(function ()
{
    var firebaseConfig = {
    apiKey: "AIzaSyCgNk5I1Bv5GldGziaLwf0zQ4mismBEtLc",
    authDomain: "android-worldwide.firebaseapp.com",
    databaseURL: "https://android-worldwide.firebaseio.com",
    projectId: "android-worldwide",
    storageBucket: "android-worldwide.appspot.com",
    messagingSenderId: "1066863130857",
    appId: "1:1066863130857:web:ca12a4a7cc7a2a04b11878",
    measurementId: "G-8EX0T9DQ0R"
  };

  firebase.initializeApp(firebaseConfig);

    var database = firebase.database();
    var slackButton = document.getElementById('slackLink');

    database.ref('slackInfo').on('value', function (snapshot)
    {
        var data = snapshot.val();
        var slackUrl = data.url;

        slackButton.setAttribute("href", slackUrl);
    });
})();
