import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";

import { useFetchRecipientUser } from "../../Hooks/useFetchRecipient";
import { Alert, Button, Form, Row, Col, Stack, Container } from 'react-bootstrap';
import moment from 'moment';
import InputEmoji from 'react-input-emoji'

const ChatMessages = () => {
    const { user } = useContext(AuthContext);

    const { currentChat, messages, isMessagesLoading, messagesError,sendTextMessage } = useContext(ChatContext);

    const { recipientUser } = useFetchRecipientUser(currentChat, user);

    const [textMessage,setTextMessage] = useState("")
    console.log(textMessage)
    if (!recipientUser) {
        return (
            <>
                <p style={{ textAlign: "center", width: "100%" }}>
                    No conversation yet
                </p>
            </>
        );
    }
    if (isMessagesLoading) {
        return (
            <>
                <p style={{ textAlign: "center", width: "100%" }}>
                    Loading Chats
                </p>
            </>
        );
    }
    return (
        <>
            <Stack gap={4} className="chat-box">
                <div className="chat-header">
                    <p className=""><strong><b>{recipientUser.name}</b></strong></p>
                </div>
                <Stack gap={3} className="messages">
                    {
                        messages && messages.map((message, index) => (
                            <Stack key={index} className={`${message?.senderId === user?._id ? "message self align-self-end flex-grow-0" : "message  align-self-start flex-grow-0"}`}>
                                <span> {message.text} </span>
                                <span className="message-footer">  {moment(message.createdAt).fromNow()} </span>
                            </Stack>
                        ))
                    }
                </Stack>
                <Stack direction="horizontal" gap={3} className="chat-input flex-grow-0">
                    <InputEmoji value = {textMessage} onChange={setTextMessage}  fontFamily="sans-serif" borderColor="rgba(72.112,223,0.2"/>
                    <Button variant="primary" onClick={()=>{
                        setTextMessage("")
                        sendTextMessage(textMessage,user,currentChat._id,setTextMessage)
                    }} >
                    Send <i className="bi bi-arrow-right"></i>
                    </Button>
                </Stack>
            </Stack>
        </>
    );
}

export default ChatMessages;
