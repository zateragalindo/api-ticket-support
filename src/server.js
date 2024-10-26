import http from 'node:http';

import { jsonHeader } from './middlewares/jsonHandler.js';
import { routeHandler } from './middlewares/routeHandler.js';

async function listener(request, response) {
  await jsonHeader(request, response)
  routeHandler(request, response)
}

http.createServer(listener).listen(3333);