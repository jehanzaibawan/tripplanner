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
