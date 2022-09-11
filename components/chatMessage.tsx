import Image from 'next/image';
import styles from '../styles/ChatMessage.module.scss';
import { Message } from '../types/message.type';

export default function ChatMessage({msg}: { msg: Message}) {
    return (
        <div className={styles.container}>
            <div className={styles.img}>
                <Image layout='fill' src="/blank.png" alt="img" />
            </div>
            
            <div>
                <div className={styles.username}>{msg.username}</div>
                {msg.content}
            </div>
        </div>
    );
}