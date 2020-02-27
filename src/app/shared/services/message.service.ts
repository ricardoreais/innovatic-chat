import { Injectable } from '@angular/core';
import { ChatMessage } from 'src/app/chat/models/chat-message.model';
import { ChatService } from './chat.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private chatService: ChatService) {}

  // This simulates a call to an API where we save the newly created message.
  public post(message: ChatMessage) {
    console.log('HTTP POST ChatMessage');
    console.log(message);
    // We should not do this, it is just to simulate an insert into the DB;
    this.chatService.chatDetail.messages.push(message);
  }
}
