import { Injectable, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/observable'
@Injectable({
  providedIn: 'root'
})
export class MessagingService {
constructor(private router: Router,private socket: Socket) { }


joinRoom(data)
{
    this.socket.emit('join',data);
}

newUserJoined()
{
    let observable = new Observable<{user:String, message:String}>(observer=>{
        this.socket.on('new user joined', (data)=>{
            observer.next(data);
        });
        this.socket.on('joined successfully', (data) => {
          observer.next(data);
        })
        return () => {this.socket.disconnect();}
    });

    return observable;
}

leaveRoom(data){
    this.socket.emit('leave',data);
}

userLeftRoom(){
    let observable = new Observable<{user:String, message:String}>(observer=>{
        this.socket.on('left room', (data)=>{
            observer.next(data);
        });
        this.socket.on('leave successfully', (data) => {
          observer.next(data)
        })
        return () => {this.socket.disconnect();}
    });

    return observable;
}

sendMessage(data)
{
    this.socket.emit('message',data);
}

newMessageReceived(){
    let observable = new Observable<{user:String, message:String}>(observer=>{
        this.socket.on('new message', (data)=>{
            observer.next(data);
        });
        return () => {this.socket.disconnect();}
    });

    return observable;
}
}
