import fs from 'fs';
import { Apparel } from './types';

const DATA_PATH = './data.json';

export const readData = (): { apparel: Apparel[] } => {
  const rawData = fs.readFileSync(DATA_PATH, 'utf-8');
  return JSON.parse(rawData);
};

export const writeData = (data: { apparel: Apparel[] }) => {
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
};
