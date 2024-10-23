import express from 'express';
import {
  updateStock,
  bulkUpdateStock,
  checkOrderFulfillment,
  calculateOrderCost,
} from './controllers';

const router = express.Router();

router.post('/stock', updateStock);
router.post('/stock/bulk', bulkUpdateStock);
router.post('/order/fulfillment', checkOrderFulfillment);
router.post('/order/cost', calculateOrderCost);

export default router;
