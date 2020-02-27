export interface Chat {
    id: number;
    name: string;
    messagesCount: number;
    latestMessageDate: Date;
    latestMessage: string;
    isFavorite: boolean;
}
