import { Socket } from "socket.io";

interface ISocket {
  handleConnection(socket: Socket): void;
  middlewareImplementation?(soccket: Socket, next: any): void
}

export default ISocket;
