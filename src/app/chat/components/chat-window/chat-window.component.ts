import { Component, OnInit, Input } from '@angular/core';
import { ChatDetail } from '../../models/chat-detail.model';
import { FormGroup, FormControl } from '@angular/forms';
import { MessageService } from 'src/app/shared/services/message.service';
import { ChatMessage } from '../../models/chat-message.model';
import { UserService } from 'src/app/shared/services/user.service';
import { ChatService } from 'src/app/shared/services/chat.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {
  @Input() chat: ChatDetail;
  public messageForm: FormGroup;
  private valueCtrl: FormControl;

  constructor(private messageService: MessageService, private chatService: ChatService, private userService: UserService) {}

  ngOnInit() {
    this.valueCtrl = new FormControl('');
    this.messageForm = new FormGroup({
      value: this.valueCtrl
    });
  }

  public sendMessage(messageValue: string): void {
    // Clean the message input.
    this.valueCtrl.setValue('');
    const message: ChatMessage =  {
      id: 1,
      userId: this.userService.CurrentUser.id,
      value: messageValue,
      sentByMe: true,
      sent: true,
      read: false,
      received: false,
      date: new Date()
    };

    this.messageService.post(message);
    this.chatService.updateCurrentChat(this.chatService.currentChatId);
  }
}
