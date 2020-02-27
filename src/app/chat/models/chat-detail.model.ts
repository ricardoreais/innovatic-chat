import { ChatUser } from './chat-user.model';
import { ChatMessage } from './chat-message.model';

export interface ChatDetail {
    id: number;
    receiver: ChatUser;
    sender: ChatUser;
    messages: ChatMessage[];
}
