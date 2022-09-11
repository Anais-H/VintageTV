import { FormEvent, useEffect } from 'react';
import styles from '../styles/Chat.module.scss';
import { Message } from '../types/message.type';
import ChatMessage from './chatMessage';

export default function Chat() {

    useEffect(() => {
        console.log("telling name and subscribing to live chat...");
    }, []);

    const mockMessages : Message[] = [
        {id: 1, username: "Hai-Lyn", content: "Hello world!"},
        {id: 2, username: "Jin-Yan", content: "Hello you!"},
        {id: 3, username: "Jin-Yan", content: "Hello you!"},
        {id: 4, username: "Jin-Yan", content: "Hello you!"},
        {id: 5, username: "Jin-Yan", content: "Hello you!"},
        {id: 6, username: "Jin-Yan", content: "Hello you!"},
        {id: 7, username: "Jin-Yan", content: "Hello you!"},
        {id: 8, username: "Jin-Yan", content: "Hello you!"},
        {id: 9, username: "Jin-Yan", content: "Hello you!"},
        {id: 10, username: "Jin-Yan", content: "Hello you!"},
    ];

    function handleSubmitMessage(event: FormEvent<HTMLFormElement>) {
        event?.preventDefault();
    }

    function getMessages() {
        let msgs = [];
        for (let msg of mockMessages) {
            msgs.push(<ChatMessage key={msg.id} msg={msg} />)
        }
        return msgs;
    }

    return (
        <div className={styles.layout}>
            <div className={styles.messagesContainer}>
                { getMessages() }
            </div>

            <div className={styles.inputContainer}>
                <form className={styles.chatForm} onSubmit={(event) => handleSubmitMessage(event)}>
                    <input className={styles.messageInput} type="text" name="message" id="messageInput" />
                    <button className={styles.submitBtn}>Send</button>
                </form>
            </div>
        </div>
    )
}