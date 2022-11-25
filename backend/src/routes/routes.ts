import express from "express";
import DonoController from "../controllers/DonoController";


export const router = express.Router();

router.get('/donos', DonoController.listAll );