import express from 'express';
import {
  createApplication,
  getMyApplications,
  getApplications,
  updateApplicationStatus,
} from '../controllers/applicationController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, createApplication).get(protect, admin, getApplications);
router.route('/my-applications').get(protect, getMyApplications);
router.route('/:id/status').put(protect, admin, updateApplicationStatus);

export default router;
