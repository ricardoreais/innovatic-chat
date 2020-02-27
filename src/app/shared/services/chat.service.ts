import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Chat } from 'src/app/chat/models/chat.model';
import { ChatDetail } from 'src/app/chat/models/chat-detail.model';
import { UserService } from './user.service';
import { ChatMessage } from 'src/app/chat/models/chat-message.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  // TODO: Each chat should have pagination (i.e. messages loaded limit, like 20 messages each time, and get 20 more when we scroll up)
  public chatDetail: ChatDetail = {
    id: 3,
    receiver: {
      id: 100,
      name: 'Bruce Wayne',
      description: 'Gotham city CEO'
    },
    sender: {
      id: this.userService.CurrentUser.id,
      name: this.userService.CurrentUser.name,
      description: 'just me'
    },
    messages: [
      {
        id: 1,
        userId: 100,
        value: `Where's Rachel bro?`,
        sentByMe: false,
        sent: false,
        read: false,
        received: true,
        date: new Date(1995, 11, 17, 1, 54, 0)
      },
      {
        id: 1,
        userId: 100,
        value: `I'm not playing`,
        sentByMe: false,
        sent: false,
        read: false,
        received: true,
        date: new Date(1995, 11, 17, 2, 23, 0)
      },
      {
        id: 2,
        userId: 101,
        value: `I have no idea what are you talking about!?`,
        sentByMe: false,
        sent: false,
        read: false,
        received: true,
        date: new Date(1995, 11, 17, 2, 21, 0)
      },
      {
        id: 4,
        userId: 101,
        value: `It be like that`,
        sentByMe: false,
        sent: false,
        read: false,
        received: true,
        date: new Date(1995, 11, 17, 3, 51, 0)
      }
    ]
  };

  private chats: Chat[] = [
    {
      id: 1,
      latestMessage: 'Yo waddup',
      messagesCount: 0,
      latestMessageDate: new Date(),
      isFavorite: false,
      name: 'Dr Nice'
    },
    {
      id: 2,
      latestMessage: `...And I'm Iron Man`,
      messagesCount: 0,
      latestMessageDate: new Date(),
      isFavorite: false,
      name: 'Tony Stark'
    },
    {
      id: 3,
      latestMessage: `Where's Rachel`,
      messagesCount: 0,
      latestMessageDate: new Date(),
      isFavorite: false,
      name: 'Bruce Wayne'
    },
    {
      id: 4,
      latestMessage: `It's crasyy`,
      messagesCount: 0,
      latestMessageDate: new Date(),
      isFavorite: false,
      name: 'Bladee'
    }
  ];

  private currentChatSubject = new Subject<ChatDetail>();
  // We only expose the currentChatId as an observable because, the subject would allow anyone outside to modify the values.
  // Anyone accessing from outside the service can still modify the values through the updateCurrentChat() method.
  public currentChatId: number;
  public currentChat$ = this.currentChatSubject.asObservable();

  // I just added the user service here to get the user name a make the app more realistic,
  // if we had a real API and a authenticated user (server-side).
  // We would not need this to get the current user info.
  constructor(private userService: UserService) {}

  // This simulates a call to an API where we get the chat list.
  public get(): Observable<Chat[]> {
    return of(this.chats);
    // .pipe(delay(1000));
  }

  // This simulates a call to an API where we get the chat details.
  public getDetail(id: number): Observable<ChatDetail> {
    console.log('HTTP GET Chat with id: ' + id);

    return of(this.chatDetail).pipe(
      // delay(1000),
      // We want to calculate if the message was sent by me only once,
      // that's why we do it here instead of adding complex logic to the html template.
      map((chat: ChatDetail) => {
        chat.messages.forEach(
          (msg: ChatMessage) => (msg.sentByMe = chat.sender.id === msg.userId)
        );
        // We can also sort the messages here, but we should receive them sorted from the API.
        chat.messages.sort((a: ChatMessage, b: ChatMessage) =>
          b.date > a.date ? -1 : b.date < a.date ? 1 : 0
        );

        return chat;
      })
    );
  }

  public updateCurrentChat(id: number): void {
    this.currentChatId = id;
    this.currentChatSubject.next(this.chatDetail);
  }
}
