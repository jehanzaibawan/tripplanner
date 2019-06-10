import express from "express";
import { getDestinations, getTrips } from "../controllers/TripController";
const router = express.Router();

router.get("/getDestinations", getDestinations);

router.post("/getTrips", getTrips);

export default router;
