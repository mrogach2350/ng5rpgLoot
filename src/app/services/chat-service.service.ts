import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private url = environment.ws_url;
  private socket;

  sendMessage(message) {
    this.socket.emit('add-message', message);
  }

  getMessages() {
    const observable = new Observable(observer => {
      this.socket = io(this.url);

      this.socket.on('message', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });

    return observable;
  }
}
