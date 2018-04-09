# GolfCard


## Summary

App for golfers.  It's a virtual scorecard that allows golfers to record and save their golf scores as they play. Views optimized for mobile (though not a native mobile app).  

## Background

I really like the technology stack that we use at work.  So, I wanted to build something with some of those same technologies.  At work, we use: 

+ C#
+ Redis
+ SignalR
+ ODATA 
+ .NET Web API
+ .NET MVC
+ React 
+ Redux
+ TypeScript

This app, **GolfCard**, won't be quite so ambitious.  Its technology stack will be: 

+ C#
+ SQL Server Express
+ Entity Framework
+ LINQ (Maybe ODATA, if appropriate)
+ .NET Web API
+ NET MVC (home View will be root for the React App)
+ React
+ Redux
+ TypeScript

I *REALLY* enjoy using TypeScript with React!!! 


## Upcoming To-Dos 

[ ] - Exception Handling in the Web APi Controller 

[ ] - Use Axios call to refresh React app state

[ X ] - Scaffold out React/Redux app using Create React App with TypeScript 

---> Though, I didn't use CRA, I used the .NET templates. 

**LESSON LEARNED**:  *The .NET React and Redux templates (which you can access in Visual Studio when you are creating a new project) are super buggy.  They have some good stuff, such as the boilerplate for your app's stores and reducers, but their implementation (the "Counter" and "FetchData" components and all their associated utilities) are garbage, and I spent a lot of time removing all of their specific code to leave behind the boilerplate for the reducers, stores, etc and eliminate all the bugs.*  

**LESSON LEARNED POST SCRIPT**: *The .NET tutorials were too crazy.  I ended up getting rid of them.  I scaffolded out the React app with Create-React-App.  Though the TypeScript linter is super stringent, I am now making it work.  It took all weekend.  :(*    



## Timeline

**Day One (April 7, 2018)** 

+ Created data model
+ Created Web API
+ Created Controllers for Starting a Golf Round, Adding Hole Score, Getting a Golf Round
+ Created SQL Server Express Database

**Day Two (April 8, 2018)**

+ Scaffolded out the React/Redux app
+ Deleted the React/Redux app
* Reinitiated the React/Redux app with Create React App. Sucess! 
+ Tested an Axios call from React to Web API (and, thus, to the database): SUCCESS!
---- Right now, the Axios call is just calling an alert window.  Eventually, the Axios response data will refresh the React app's state. 

## Credit

- **Steve Bogucki**

~~ISO FTE dev position in the Los Angeles area. Would consider relocation, but only to Minneapolis (weird, I know, but I grew up in the area).~~  

My strength is C# fundamentals, .NET MVC and Web API, including all related technology: Entity Framework, SQL Server, LINQ etc.  I've deployed apps to Azure, Heroku, and AWS with Angular and AngularJS front-ends, but I intend to relearn vanilla JavaScript from the ground-up, just as I have C#.  

I've only recently been digging into React and TypeScript and enjoy them individually but LOVE them together.  Still making sense of Redux :) 

Please check out my LinkedIn: 

[LinkedIn](https://www.linkedin.com/in/sbogucki12/ "Steve's LinkedIn Profile")

Email: sbogucki@mail.usf.edu


## Screenshots

+ Day Two (April 8, 2018):

**Boom! Front end talking to Controller to Database:**

![RecordIt](http://g.recordit.co/2vp8iJYtF9.gif)



**NOW** *We're cooking, lol:*

![RecordIt](http://g.recordit.co/4HSA940Y6e.gif)


*React with TypeScript is working!:*

![Imgur](https://i.imgur.com/xWxuZnV.jpg)



+ Day One (April 7, 2018):

*Entity Framework Migration creating database:*

![Imgur](https://i.imgur.com/l4ZRs42.jpg)


*Initial Web API controller:* 

![Imgur](https://i.imgur.com/YwjNYne.jpg)



*Initiating a Round, via Web API controller (in Postman):*

![Imgur](https://i.imgur.com/cmlfgRR.jpg)



*We love status code: 200!:* 

![Imgur](https://i.imgur.com/YTq6kOO.jpg)



*Confirming that our round and hole 1 score were saved:* 

![Imgur](https://i.imgur.com/qfQ5Tpt.jpg)



*The initial database schema:* 

![Imgur](https://i.imgur.com/J75nT4X.jpg)





**Go Sixers**

![Imgur](https://i.imgur.com/6Fy10uw.jpg)








