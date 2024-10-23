import { Request, Response } from 'express';
import { readData, writeData } from './utils';
import { Apparel, Order } from './types';

export const updateStock = (req: Request, res: Response) => {
  const { code, size, quantity, price }: Apparel = req.body;
  const data = readData();

  const index = data.apparel.findIndex(
    (item) => item.code === code && item.size === size
  );

  if (index !== -1) {
    data.apparel[index] = { code, size, quantity, price };
  } else {
    data.apparel.push({ code, size, quantity, price });
  }

  writeData(data);
  res.status(200).send({ message: 'Stock updated successfully' });
};

export const bulkUpdateStock = (req: Request, res: Response) => {
  const updates: Apparel[] = req.body;
  const data = readData();

  updates.forEach(({ code, size, quantity, price }) => {
    const index = data.apparel.findIndex(
      (item) => item.code === code && item.size === size
    );

    if (index !== -1) {
      data.apparel[index] = { code, size, quantity, price };
    } else {
      data.apparel.push({ code, size, quantity, price });
    }
  });

  writeData(data);
  res.status(200).send({ message: 'Bulk update successful' });
};

export const checkOrderFulfillment = (req: Request, res: Response) => {
  const order: Order = req.body;
  const data = readData();

  const canFulfill = order.items.every((orderItem) => {
    const item = data.apparel.find(
      (apparel) =>
        apparel.code === orderItem.code && apparel.size === orderItem.size
    );
    return item && item.quantity >= orderItem.quantity;
  });

  res.status(200).send({ canFulfill });
};

export const calculateOrderCost = (req: Request, res: Response) => {
  const order: Order = req.body;
  const data = readData();

  let totalCost = 0;
  let canFulfill = true;

  for (const orderItem of order.items) {
    const item = data.apparel.find(
      (apparel) =>
        apparel.code === orderItem.code && apparel.size === orderItem.size
    );

    if (item && item.quantity >= orderItem.quantity) {
      totalCost += item.price * orderItem.quantity;
    } else {
      canFulfill = false;
      break;
    }
  }

  res.status(200).send({ canFulfill, totalCost: canFulfill ? totalCost : 0 });
};
