export interface ChatMessage {
    id: number;
    userId: number;
    value: string;
    date: Date;
    sentByMe: boolean;
    // I won't have time to implement this, but it would be nice to have a sent/received/read status.
    // This status could also be an enum instead of having three properties.
    sent: boolean;
    received: boolean;
    read: boolean;
}
