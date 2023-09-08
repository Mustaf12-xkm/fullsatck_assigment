import express from 'express';
import {registeremploye,getAllEmployees, getAllverifiedEmployees, update} from '../constrollers/registeremploye.js';


const employeroute= express.Router()

employeroute.post("/",registeremploye)
employeroute.get("/get-employes",getAllEmployees)
employeroute.get("/get-verified-employes",getAllverifiedEmployees)
employeroute.post("/update-employes/:id",update)

export default employeroute