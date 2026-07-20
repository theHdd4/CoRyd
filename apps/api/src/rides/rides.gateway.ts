import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: true, namespace: 'rides' })
export class RidesGateway {
  @WebSocketServer()
  server!: Server;

  publishRideUpdate(rideId: string, status: string) {
    this.server.emit('ride.status.updated', { rideId, status });
  }
}
