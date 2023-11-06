import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";

const chats = () => {
    const {user} = useContext(AuthContext)
    const {chats,createChat,onlineUsers} = useContext(ChatContext)
    return ( 
        <>
            <div className="all-users">
                {chats && chats.map((u,index)=>{
                    return (
                        <div className="single-user" key={index} onClick={()=>createChat(user._id,u._id)}>
                        {u.name}
                        {onlineUsers.includes(u._id) ? <span className="user-online"></span> : null}
                        </div>   
                    )
                })}
            </div>
        </>
     );
}
 
export default chats;