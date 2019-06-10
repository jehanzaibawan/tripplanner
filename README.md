<strong>Trip Planner</strong><br>
This is a small utility which can help you to plan your trip, all it needs is the destinations to which you want to travel and it will sort the trip based on fastest and cheapest options available.
<br><br>
Installation and running instruntions:

1. Clone this repo to your machine <br>
   git clone https://github.com/jehanzaibawan/tripplanner.git

2. Once the repo is cloned,<br>run 'yarn' or 'yarn install' to install the dependencies

3. Build the Server script using the following command<br>
   yarn build:server

4. Before you start the client and servers please ensure you have not anything running on the following ports, if running please kill the process first.<br>
   8080 for the server<br>
   3000 for the client

5. Start the server by running following command<br>
   yarn start:server<br>
   once server is up, you can check the API health on http://localhost:8080/health

6. Start the client by running following command<br>
   yarn start:client<br>
   once client is started, it will automatically will open up the browser and will redirect you to http://localhost:3000, if for some reason, browser/tab doesn't open, please open it yourself.
<b><br>
Folder Structure explained:<br>
Server side code is seperated into a folder caller 'SERVER', its purely a Node and Express. This can be easy in moving or taking out the server side code in the future for different deployment or server needs.<br><br>
The server side code uses es6 features which then transpiled to es5 for which babel is setup into the project.<br>
Inside the SERVER folder there is 'src' folder which contains following sub folders,<br><br>
--Controllers -- for calling business logic and serving<br>
--Models -- for business logic<br>
--Libraries -- for algorithams<br>
--Resources<br>
--Routes -- all the routes of the api are defined here<br>
--Uitls -- for utility functions
<br>
and server.js is the entry point for the server app.
<br>
Client side code is bootstraped using Create React App.<br>
--Components -- for defining components<br>
--Resources -- for logo and images<br>
--Screens -- for the screen, as we have only screen and we are not using routes into our app<br>
--Uilts -- for utility functions<br>
<br>
and index.js is the starting point of the client app.
