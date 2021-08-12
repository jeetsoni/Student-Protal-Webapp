import { Component, OnInit } from '@angular/core';
import { MessagingService } from 'src/app/services/messaging.service';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent {

  user:String;
    room:String;
    messageText:String;
    messageArray:Array<{user:String,message:String}> = [];
    constructor(private messageService:MessagingService){
        this.messageService.newUserJoined()
        .subscribe(data=> this.messageArray.push(data));


        this.messageService.userLeftRoom()
        .subscribe(data=>this.messageArray.push(data));

        this.messageService.newMessageReceived()
        .subscribe(data=>this.messageArray.push(data));
    }

    join(){
        this.messageService.joinRoom({user:this.user, room:this.room});
    }

    leave(){
        this.messageService.leaveRoom({user:this.user, room:this.room});
    }

    sendMessage()
    {
        this.messageService.sendMessage({user:this.user, room:this.room, message:this.messageText});
        this.messageText = '';
    }
}
