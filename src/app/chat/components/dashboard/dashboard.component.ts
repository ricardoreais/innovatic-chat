import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user.model';
import { Chat } from '../../models/chat.model';
import { Observable } from 'rxjs';
import { ChatService } from 'src/app/shared/services/chat.service';
import { ChatDetail } from '../../models/chat-detail.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public user: User;
  // I usually user the '$' identifier when naming observables. (It seems like everyone does this in the documentation/literature)
  public chats$: Observable<Chat[]>;
  public currentChat$: Observable<ChatDetail>;

  constructor(private userService: UserService, private chatService: ChatService) { }

  ngOnInit() {
    this.user = this.userService.CurrentUser;
    this.chats$ = this.chatService.get();
    // Everytime there's a change to the current chat we need to get the chat detail information.
    this.currentChat$ = this.chatService.currentChat$;
  }

  public openChat(id: number): void {
    this.chatService.getDetail(id)
      .subscribe((chat: ChatDetail) => this.chatService.updateCurrentChat(chat.id));
  }
}
