import { useEffect, useState } from "react";
import { baseUrl, getRequest } from "../utils/services";

export const useFetchRecipientUser = (chat, user) => {
    const [recipientUser, setRecipientUser] = useState(null);
    const [error, setError] = useState(null);

    const recipientId = chat?.members.find(
        (id) => id !== user?._id
    );

    useEffect(() => {
        const getUser = async () => {
            if (!recipientId) {
                return; // Return early if recipientId is not available
            }
            try {
                const response = await getRequest(`${baseUrl}/users/find/${recipientId}`);
                if (response.error) {
                    setError(response.error); // Set error if there's an error in the response
                } else {
                    setRecipientUser(response); // Set recipientUser if the request is successful
                }
            } catch (error) {
                setError(error); // Handle any potential network errors
            }
        };

        getUser();
    }, [recipientId]); // Include recipientId in the dependency array to trigger the effect when it changes

    return { recipientUser, error };
};
