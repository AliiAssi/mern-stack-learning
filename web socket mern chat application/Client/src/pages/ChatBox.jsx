import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";
import { Alert, Button, Form, Row, Col, Stack ,Container} from 'react-bootstrap';
import UserChat from '../components/chat/UserChat'
import Chats from '../components/Chats'
import ChatMessages from "../components/chat/ChatMessages";


const ChatBox = () => {
    const {
        userChats,
        isUserChatsLoading,
        userChatsError,updateCurrentChat,
    } = useContext(ChatContext)
    const {
        user
    } = useContext(AuthContext)


    return ( 
    <>
    <Container>
        <Chats />
        {
            userChats?.length < 1 ? null : 
            <Stack direction="horizontal" gap={5} className="align-items-start">
                <Stack className="messages-box flex-grow-0 pe-3" gap={3}>
                    {isUserChatsLoading && (
                        <p>loading</p>
                    )}
                    {
                        userChats?.map((chat,index)=>{
                            return (
                                <div key={index} onClick={()=>updateCurrentChat(chat)}>
                                    <UserChat chat ={chat} user={user} />
                                </div>
                            )
                        })
                    }
                </Stack>
                <ChatMessages />
            </Stack>
        }
    </Container>
    </> );
}
 
export default ChatBox;