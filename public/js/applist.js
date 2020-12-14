$("document").ready(function() {
    var template = $("#appTemplate").html();
    // Handlebars compiles the template into a callable function
    var renderer = Handlebars.compile(template);
    var result = renderer({
      "applications": [{
        "appImageLocation": "../assets/images/Shotify.gif",
        "appName": "Shotify",
        "appDescription": "Taking the POWER HOUR classic to the next level by incorporating Spotify. Create your playlist of 60 songs and you're ready for a good time. The app includes a family friendly UI for those only interested in music.",
        "appLink": "https://shotify-music-player.herokuapp.com/",
        "gitRepository": "https://github.com/giocordova20/project2"
      }, {
        "appImageLocation": "../assets/images/BurgerTime.gif",
        "appName": "Burger Time",
        "appDescription": "Use this application to keep track of the Burgers you have eaten or want to eat. This application utilizes MySQL, Node, Express, Handlebars, ORM, and follows the MVC design pattern.",
        "appLink": "https://burger-time2020.herokuapp.com/",
        "gitRepository": "https://github.com/giocordova20/burger-time"
      }, {
        "appImageLocation": "../assets/images/Food&Fun.gif",
        "appName": "food&fun",
        "appDescription": "Need to plan an outing? Want to find a nearby restaurant, local events, and get your weather forecast? food&fun will do it all for you. Just enter you ZIP Code, and have your day planned.",
        "appLink": "https://austinkst.github.io/FoodandFun/",
        "gitRepository": "https://github.com/Austinkst/FoodandFun"
      }, {
        "appImageLocation": "../assets/images/MyWeather.gif",
        "appName": "My Weather",
        "appDescription": "The My Weather application is designed for a person on the go. Plan your work trip or vacation by first looking at the forecast. Search by ZIP Code or the City and State of you destination.",
        "appLink": "https://giocordova20.github.io/my-weather/",
        "gitRepository": "https://github.com/giocordova20/my-weather"
    
      }, {
        "appImageLocation": "../assets/images/NoteTaker.gif",
        "appName": "Note Taker",
        "appDescription": "Use this application to keep track of those things you want to remember. Make a note, complete it, then delete it. This app makes use of express, api routes, and database tracking. ",
        "appLink": "https://notetaker-20.herokuapp.com/",
        "gitRepository": "https://github.com/giocordova20/note-taker"
    
      }, {
        "appImageLocation": "../assets/images/PasswordGenerator.gif",
        "appName": "Code Quiz",
        "appDescription": "Having a hard time coming up with a password? The Passwor Generator application will create one for you. Just specify the length, and the character types you'd like to use.",
        "appLink": "https://giocordova20.github.io/password-generator/",
        "gitRepository": "https://github.com/giocordova20/password-generator"
      }, {
        "appImageLocation": "../assets/images/WorkDayScheduler.gif",
        "appName": "Work Day Scheduler",
        "appDescription": "Plan your work day with the Work Day Scheduler. Enter your task for each hour slot and make updates as needed. The color coded rows will help you track time throughout the day.",
        "appLink": "https://giocordova20.github.io/work-day-scheduler/",
        "gitRepository": "https://github.com/giocordova20/work-day-scheduler"
    
      }, {
        "appImageLocation": "../assets/images/CodeQuiz.gif",
        "appName": "Code Quiz",
        "appDescription": "Test your coding knowledge with this application and brag by leaving your name on the leader board. This short quiz can be expanded by adding more question and answers.",
        "appLink": "https://giocordova20.github.io/code-quiz/",
        "gitRepository": "https://github.com/giocordova20/code-quiz"
    
      }, {
        "appImageLocation": "../assets/images/MyDevTeam.gif",
        "appName": "My Dev Team Builder Time",
        "appDescription": "Quickly create a web page of your dev team using the CLI. Follow the prompts and enter your manager, engineers, and interns. View your team on a formatted web page when finished.",
        "appLink": "",
        "gitRepository": "https://github.com/giocordova20/my-dev-team/"
      }]
    });
    
    $("#appInfo").html(result);
});