import http from 'node:http';

import { jsonHeader } from './middlewares/jsonHandler.js';

async function listener(request, response) {
  await jsonHeader(request, response)
}

http.createServer(listener).listen(3333);