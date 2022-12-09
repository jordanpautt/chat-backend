import { Socket } from "socket.io";
import ISocket from "./socket.interface";

class ChatsSocket implements ISocket {

  handleConnection(socket: Socket) {

    socket.emit('ping', 'Hi! I am a live socket connection');

  }

  middlewareImplementation(socket: Socket, next) {
    //Implement your middleware for orders here
    return next();
  }
}

export default ChatsSocket;
