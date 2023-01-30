import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebSocketService } from '../service/websocket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  message = '';
  recieverId: string = '';
  isUser: boolean = true;
  messages: any[] = [];
  senderId: string = '';
  isChatStartBtn: boolean = true;
  isEnableSendBtn: boolean = false;

  constructor(
    private webSocketService: WebSocketService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      let res = params['admin'];
      if (res === 'true') {
        this.senderId = 'admin';
        this.recieverId = 'user';
        this.isUser = false;
      } else {
        this.senderId = 'user';
        this.recieverId = 'admin';
        this.isUser = true;
      }
    });

    this.webSocketService.addUser(this.senderId).subscribe((data: any) => {
      console.log(data);
    });
  }

  getMessages = (): void => {
    this.webSocketService.getMessages().subscribe((data: any) => {
      for (var i = 0; i < this.messages.length; i++) {
        if (
          this.messages[i].msg === data.text &&
          this.messages[i].type === false
        ) {
          return;
        }
      }
      console.log(data.text);
      this.messages.push({ msg: data.text, type: false });
    });
  };

  sendMessage() {
    if (this.message === '') {
      alert('Please Enter message');
      return;
    }
    const ob = {
      senderId: this.senderId,
      recieverId: this.recieverId,
      text: this.message,
    };
    this.messages.push({ msg: this.message, type: true });
    this.webSocketService.sendMessage(ob);
    this.message = '';
    this.getMessages();
  }

  startChat() {
    const ob = {
      senderId: this.senderId,
      recieverId: this.recieverId,
      text: this.message,
    };
    this.webSocketService.sendMessage(ob);
    this.message = '';
    this.getMessages();
    this.isChatStartBtn = false;
    this.isEnableSendBtn = true;
  }
}
