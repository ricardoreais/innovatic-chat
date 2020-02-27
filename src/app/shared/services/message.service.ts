import { Injectable } from '@angular/core';
import { ChatMessage } from 'src/app/chat/models/chat-message.model';
import { ChatService } from './chat.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private chatService: ChatService, private httpClient: HttpClient) {}

  // This simulates a call to an API where we save the newly created message.
  public post(message: ChatMessage): Observable<any> {
    console.log('HTTP POST ChatMessage');
    console.log(message);
    // We should not do this, it is just to simulate an insert into the DB;
    this.chatService.chatDetail.messages.push(message);
    return this.httpClient.post<any>('http://www.mocky.io/v2/5cee37a5300000253a6e99af', message);
  }
}
