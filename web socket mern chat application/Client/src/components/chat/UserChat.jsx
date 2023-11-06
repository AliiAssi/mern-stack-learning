import { Stack } from "react-bootstrap";
import { useFetchRecipientUser } from "../../Hooks/useFetchRecipient";
import avatar from '../../assets/avatar.svg'
import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
const UserChat = ({ chat, user }) => {
    const {onlineUsers} = useContext(ChatContext)
    const { recipientUser } = useFetchRecipientUser(chat, user)

    const isOnline = onlineUsers?.includes(
        (user) =>
        {
            user?.userId === recipientUser?._id
        }
    )
    return (
        <>
            <Stack direction="horizontal" gap={3} role="button"
                className="user-card aligns-items-center p-2 justify-content-between" >
                <div className="d-flex">
                    <div className="me-2">
                        <img src = {avatar} />
                    </div>
                    <div className="text-content">
                        <div className="name">
                            {recipientUser?.name}
                            <div className="text">Text Message</div>
                        </div>
                    </div>

                </div>
                <div className="d-flex flex-column alghn-items-end">
                    <div className="date">
                        12/21/12
                    </div>
                    {isOnline && (
                        <span className="user-online">
                            {/* Online indicator content */}
                        </span>
                    )}

                </div>
                <div className="this-user-notifications">
                    2
                </div>
            </Stack>
        </>
    );
}

export default UserChat;