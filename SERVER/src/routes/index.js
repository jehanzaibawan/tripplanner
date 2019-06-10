import tripplannerRoute from "./TripPlanner";

const appRoutes = app => {
  app.use("/tripplanner", tripplannerRoute);

  // ... list all the routes here
};

export default appRoutes;
