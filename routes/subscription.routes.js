import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { createSubscription, getUserSubscriptions } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get('/',(req,res)=>{res.send({ title : 'get all subscriptions'})});

subscriptionRouter.get('/:id',(req,res)=>{res.send({ title : 'get subscription details'})});

subscriptionRouter.post('/',authorize, createSubscription);

subscriptionRouter.delete('/:id',(req,res)=>{res.send({ title : 'delete a subscription'})});

subscriptionRouter.get('/user/:id', authorize, getUserSubscriptions);

subscriptionRouter.put('/:id/cancel',(req,res)=>{res.send({ title : 'Cancel subscription'})});

subscriptionRouter.get('/upcoming-renewals',(req,res)=>{res.send({ title : 'get upcoming renewals'})});



export default subscriptionRouter;