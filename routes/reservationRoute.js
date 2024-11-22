import express from 'express';
import { sendReservation } from '../controller/reservation';

const router =express.Router();

router.post('/send',sendReservation);

export default router;
