import { Router } from 'express';

import auth from './auth';
import user from './user';
import head from './head';



const route = Router();

export default () => {
 
  auth(route);
 user(route);
 head(route);

  return route
};
