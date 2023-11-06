import { createContext, useCallback, useEffect, useState } from "react";
import { getRequest, baseUrl, postRequest } from "../utils/services";
import {io} from 'socket.io-client'
export const ChatContext = createContext();

export const ChatContextProvider = ({ children, user }) => {
  const [userChats, setUserChats] = useState(null);
  const [isUserChatsLoading, setIsUserChatsLoading] = useState(false);
  const [userChatsError, setUserChatsError] = useState(null);
  const [chats, setChats] = useState([]);
  const [currentChat,setCurrentChat] = useState(null)
  const [socket,setSocket] = useState(null)

  const [messages,setMessages] = useState(null)
  const [isMessagesLoading,setIsMessagesLoading] = useState(false)
  const [messagesError,setMessagesError] = useState(null)
  

  const [sendTextMessageError,setSendTextMessageError] = useState(null)
  const [newMessage,setNewMessage] = useState(null)
  const [onlineUsers, setOnlineUsers] = useState([])
  useEffect(() => {
    // Establish a new socket connection when the user prop changes
    const newSocket = io("http://localhost:3001");
    
    // Update the socket state with the new socket
    setSocket(newSocket);
  
    // Cleanup function to disconnect the socket when the component unmounts or when the user prop changes
    return () => {
      if (newSocket) {
        newSocket.disconnect();
      }
    };
  }, [user]);
  
  useEffect(() => {
    // Emit the "addNewUser" event when the component mounts
    if (socket) {
      socket.emit("addNewUser", user?._id);
      socket.on("onlineUsers",(res)=>{
        setOnlineUsers(res)
      })
      return ()=>{
        socket.off("onlineUsers")
      };
    }
  }, [socket, user]);
  
  console.log("online users = ",onlineUsers)
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await getRequest(`${baseUrl}/users`);

        if (response.error) {
          console.error("Error fetching users:", response.error);
          
          return;
        }
        
  
        const filteredChats = response.filter((u) => {

          if (user._id === u._id) return false;
  
          let isChatCreated = false;
          if (userChats) {
            isChatCreated = userChats?.some((chat) => {
              return chat.members[0] === u._id || chat.members[1] === u._id;
            });
          }
  
          return !isChatCreated;
        });
  
        setChats(filteredChats);

      } catch (error) {
      }
    };
  
    getUsers();
  }, [userChats]); // Empty dependency array indicates that this effect runs once on component mount
  
  useEffect(() => {
    const getUserChats = async () => {
      if (user?._id) {
        setIsUserChatsLoading(true);
        setUserChatsError(null);

        try {
          const response = await getRequest(`${baseUrl}/chats/${user?._id}`);
          setIsUserChatsLoading(false);

          if (response.error) {
            return setUserChatsError(response);
          }
          setUserChats(response)
        } catch (error) {
          console.log(error);
          setIsUserChatsLoading(false);
          setUserChatsError('An error occurred while fetching user chats.');
        }
      }
    };

    getUserChats();
  }, [user]);

  useEffect(
    ()=>{
      const getMessages = async()=>{
        setIsMessagesLoading(true)
        setMessagesError(null)
        const response = await getRequest(`${baseUrl}/messages/${currentChat?._id}`)
        setIsMessagesLoading(false)
        if(response.error){
          return setMessagesError(response)
        }
        setMessages(response)
      };
      getMessages()
    },
    [currentChat]
  )

  // send message 
  useEffect(() => {
    if (socket) {
      const recipientId = currentChat?.members.find(
        (id) => id !== user?._id
      );
      
      socket.emit("sendMessage",{...newMessage,recipientId})
      
    }
  }, [newMessage]);
   // receive message 
   useEffect(() => {
    if (socket) {
      socket.on("getMessage",res =>{
        if (currentChat?._id !== res.chatId ) return 

        setMessages((prev)=> [...prev,res])

      })
      return ()=>{
        socket.off("getMessage")
      }
      
    }
  }, [socket,currentChat]);

  const updateCurrentChat = useCallback((chat)=>{
    setCurrentChat(chat)
  },[])
  const createChat = useCallback(
    async (firstId,secondId)=>{
      const response = await postRequest(`${baseUrl}/chats/`,JSON.stringify({
        firstId,secondId
      }));
      if(response.error){
        return console.log("error creat chat")
      }
      setUserChats((prev) => [...prev, response])
    },
    []
  )
  const sendTextMessage = useCallback(async(textMessage,sender,currentChatId,setTextMessage)=>{
    if (!textMessage) return 
    const response = await postRequest(`${baseUrl}/messages/`,JSON.stringify(
      {
        chatId : currentChatId,
        senderId : sender._id,
        text : textMessage
      }
    ))

    if(response.error){
      return sendTextMessageError(response)
    }
    setNewMessage(response)
    setMessages((prev)=>[...prev,response])
    sendTextMessage("")
  },[])

  return (
    <ChatContext.Provider
      value={{
        userChats,
        isUserChatsLoading,
        userChatsError,chats,createChat,updateCurrentChat,
        messages,
        isMessagesLoading,messagesError,
        currentChat,sendTextMessage,onlineUsers
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
