# GolfCard


## Summary

App for golfers.  It's a virtual scorecard that allows golfers to record and save their golf scores as they play. Views optimized for mobile (though not a native mobile app).  

## Background

I really like the technology stack that we use at work.  So, I wanted to build something with some of those same technologies.  At work, we use: 

+ C#
+ Redis
+ Azure Cloud Storage
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
+ ASP.NET Identity

I *REALLY* enjoy using TypeScript with React!!! 


## Upcoming To-Dos 

[ ] - Build core functionality in the React app
<br/>
---- Build out input for hole pars
<br/>
---- Build out submit/post for hole pars 

[ ] - Integrate Redux to manage state

[ ] - Format and style main view

[ ] - Exception Handling in the Web APi Controller 

[ X ] - Use Axios call to refresh React app state

[ X ] - Scaffold out React/Redux app using Create React App with TypeScript 

---> Though, I didn't use CRA, I used the .NET templates. 

**LESSON LEARNED**:  *The .NET React and Redux templates (which you can access in Visual Studio when you are creating a new project) are super buggy.  They have some good stuff, such as the boilerplate for your app's stores and reducers, but their implementation (the "Counter" and "FetchData" components and all their associated utilities) are garbage, and I spent a lot of time removing all of their specific code to leave behind the boilerplate for the reducers, stores, etc and eliminate all the bugs.*  

**LESSON LEARNED POST SCRIPT**: *The .NET tutorials were too crazy.  I ended up getting rid of them.  I scaffolded out the React app with Create-React-App.  Though the TypeScript linter is super stringent, I am now making it work.  It took all weekend.  :(*    

## Notes from the Developer

*4/29/2018* 

I added ASP.NET Identity to the project.  Created the models in the code base and used Entity Framework to make SQL Server tables to support Users and Roles.  Today, I built all of the cshtml (Razor) views to support Identity (login, registration, lost password, etc).  Though, I'm not certain I will actually use these cshtml views in the app.  But having them in place for some reason helps me make sense of things.  Eventually, I'll replace the cshtml views with client-side views in the React app that perform the same roles (login modals, lost password alert, etc).  For the cshtml views, I just stole the code from my existing Spa: ASMR project.  
<br/>

*4/20/2018*

You're gonna laugh at me.  I trashed the TypeScript app.  lol.  <br/>

The decision is only modestly as pathetic as it sounds.  With work and my commute, I don't have a lot of time to devote to this, so I decided to discard TS for now for the sake of using the limited time judiciously.  <br/>

While this project was originally intended to reinforce technologies I use at work, I've decided that I want it to do that, but also to be something, as an app, that I can see and use as quickly as possible.   And then refactor and expand from there.  <br/>

I'm still sufficiently at the learning phase with TypeScript that it slows me down a bit. Which is annoying, because I imagine as I can apply it better, it will actually increase my coding efficiency. Plus, the non sytactical things, like external libraries not always importing easilly (for me, at least), really delay me with TypeScript. <br/>
  

*4/14/2018*

With a fulltime job and a long commute, I am not able to dedicate as much time to this project as I would wish.  But I'll try to get to it at least every weekend, and hopefully during some weeknights. <br/>

I'm also discovering that I had to moderate some of the TypeScript Linter's settings.  It was so stringent that it made development super cumbersome.  Though, I don't think any of the changes I made to the linter will lessen the integrity of TypeScript's value. <br/>

One issue that I encountered when working with Redux with TypeScript (separate from React) was that TypeScript didn't recognize the getState() call as a user of the createStore function.  So, TypeScript would complain that createStore was being set, but not used.  Which isn't accurate; createStore was being used by getState(), but the createStore() value wasn't being called directly.  Which seems to upset the TypeScript linter.  <br/>

I'm not sure if that same issue will be apparent when using TypeScript with Redux connected to the React app.  But, in any case, I'm not using Redux in **GolfCard** yet so, we'll cross that bridge when we arrive to it! <br/>

## Timeline

**Day Ten (April 29, 2018)**
+ Added Identity views (login, forgot password, etc); stole the code from my Spa: ASMR project
+ Played arround with JWT tokens in the Account Controller
+ Played arround with the AppUserManager in the Account Controller
+ Updated the User and GolfRound classes to create a relationship; built the same relationship in the SQL Server db via Entity Framework

**Day Nine (April 28, 2018)**
+ Added ASP.NET Identity to the .NET project, created Identity tables in SQL Server 

**Day Eight (April 25, 2018)**

+ Added an action in the controller to save new RoundNames (which will be able to use to search by)
+ Added some styling to the app
+ Added a modal component that will later be used for login

**Day Seven (April 22, 2018)**

+ Added more components / views (basically, what exists now isn't what I intend the app to be, but a functional wireframe for me to build upon)

**Day Six (April 20, 2018)**

+ Deleted TypeScript app
+ Used Create React App to scaffold a react app
* Set up basic React-Router-Dom routing 
+ Created initial components: NewRound and SavedRound

**Day Five (April 16, 2018)**

+ Added some input fields for setting up the par for each hole.  This is *not* hole the final functionality will work.  It was just a test.  I'll return and refactor.  

**Day Four (April 15, 2018)**

+ Created some Redux code for later use (currently commented out)
+ Added to core React functionality (views conditional on whether golf course name is set)

**Day Three (April 9, 2018)**

+ The Axios call now retrieves the course name and refreshes the course name in the React app's state. 

**Day Two (April 8, 2018)**

+ Scaffolded out the React/Redux app
+ Deleted the React/Redux app
* Reinitiated the React/Redux app with Create React App. Sucess! 
+ Tested an Axios call from React to Web API (and, thus, to the database): SUCCESS!

---- Right now, the Axios call is just calling an alert window.  Eventually, the Axios response data will refresh the React app's state. 

**Day One (April 7, 2018)** 

+ Created data model
+ Created Web API
+ Created Controllers for Starting a Golf Round, Adding Hole Score, Getting a Golf Round
+ Created SQL Server Express Database


## Credit

- **Steve Bogucki**

ISO FTE dev position in the Los Angeles area. 

I like react.  I'm functional with .NET so far as Web API, Entity Framework, and LINQ go.  Working knowledge of MVC (Razor). I've had exposure to Azure, including Cosmos, DocumentDB, Blob Stoarge, and (a little) redis.  

Please check out my LinkedIn: 

[LinkedIn](https://www.linkedin.com/in/sbogucki12/ "Steve's LinkedIn Profile")

Email: sbogucki@mail.usf.edu


## Screenshots

+ Day Ten (April 29, 2018): 

*Updating the User and GolfRound tables to create a relationship, via Entity Framework:*

![Imgur](https://i.imgur.com/VcRjsWS.jpg)


*Tested the Identity db*: 

![Imgur](https://i.imgur.com/MoGbUcf.jpg)


*Added views to support .NET Identity, tho I'm unsure if I'll actually use these views, TBH:*

![Imgur](https://i.imgur.com/LIlUXS4.jpg)


+ Day Nine (April 28, 2018):

*Creating the ASP.NET Identity tables in SQL Server:*

![Imgur](https://i.imgur.com/4ZNGDcT.jpg)



+ Day Eight (April 25, 2018):

*Sometimes when I'm inspired, but directionless, I add components for future use. As in this case, with a login modal:*

![RecordIt](http://g.recordit.co/NthQ0qDFAD.gif)


*Postman - success! 200OK:*

![Imgur](https://i.imgur.com/AHudZFD.jpg)



+ Day Seven (April 22, 2018):

*The "Functional Wireframe":*

![RecordIt](http://g.recordit.co/h4ie7XOeMB.gif)

+ Day Five (April 20, 2018):

*New Create(NotTypeScript)ReactApp.  Basic routing:*

![RecordIt](http://g.recordit.co/trb5RpFrNc.gif)

+ Day Four (April 15, 2018):

*Slowly building the core functionality:*

![RecordIt](http://g.recordit.co/aBDVKhw26q.gif)

+ Day Three (April 9. 2018):

*The Axios call to the database is now refreshing the React app's state:*

![RecordIt](http://g.recordit.co/NExbTC8HAB.gif)


+ Day Two (April 8, 2018):

*Boom! Front end talking to Controller to Database:*

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








