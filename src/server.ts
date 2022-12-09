require('dotenv').config()
import 'reflect-metadata';
import Websocket from './modules/websocket/websocket';
import { createServer } from 'http';
import {
  createExpressServer,
  RoutingControllersOptions
} from 'routing-controllers'
import chatsSocket from './modules/webSocket/chats.socket';

const port = process.env.APP_PORT || 3000;

const routingControllerOptions: RoutingControllersOptions = {
  routePrefix: 'v1',
  controllers: [`${__dirname}/modules/http/*.controller.*`],
  validation: true,
  classTransformer: true,
  cors: true,
  defaultErrorHandler: true
}

const app = createExpressServer(routingControllerOptions);
const httpServer = createServer(app);
const io = Websocket.getInstance(httpServer);

io.initializeHandlers([
  { path: '/chats', handler: new chatsSocket() }
]);

httpServer.listen(port, () => {
  console.log(`This is working in port ${port}`);
});
