import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  constructor(private socket: Socket) {}

  sendMessage(ob: any) {
    this.socket.emit('sendmsg', ob);
  }

  removeuser() {
    this.socket.emit('disconnect');
  }

  addUser(userId: string) {
    return this.socket.emit('addUser', userId);
  }
  getMessages() {
    return this.socket.fromEvent<string>('getmsg');
  }
}
