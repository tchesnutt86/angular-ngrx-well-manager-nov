import { Well } from '../models/well';
import { v4 } from '../utils/uuid';

export const wellData: Well[] = [
  {
    id: v4(),
    name: 'Vertical Horizon',
    operator: 'NOV',
    location: 'Canada',
  },
  {
    id: v4(),
    name: 'Red Dragon Well',
    operator: 'Company 1',
    location: 'USA',
  },
  {
    id: v4(),
    name: 'Deep Water Well',
    operator: 'NOV',
    location: 'USA',
  },
  {
    id: v4(),
    name: 'Madagaskar Well',
    operator: 'Company 2',
    location: 'Africa',
  },
  {
    id: v4(),
    name: 'Husky #1',
    operator: 'Company 2',
    location: 'China',
  },
  {
    id: v4(),
    name: 'Petra Kwat',
    operator: 'NOV',
    location: 'Indonesia',
  },
  {
    id: v4(),
    name: 'Palunatu',
    operator: 'NOV',
    location: 'India',
  },
  {
    id: v4(),
    name: 'Alpha Omega',
    operator: 'Company 4',
    location: 'USA',
  },
  {
    id: v4(),
    name: 'Pemexa #3',
    operator: 'NOV',
    location: 'Mexico',
  },
];
