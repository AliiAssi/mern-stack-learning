import React, { useEffect, useState } from 'react';

function Effect() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((error) => console.log(error));
    }, []);

    const handleSearch = (e) => {
        setInputValue(e.target.value);
    };

    useEffect(() => {
        console.log(inputValue);
        const filter = users.filter((user) => user.name.toLowerCase().includes(inputValue));

        setFilteredUsers(filter);
    }, [inputValue, users]); // Include users as a dependency

    return (
        <div>
            <h1>Users</h1>
            <input
                id=""
                placeholder="Search"
                type="text"
                onChange={handleSearch}
                className="search"
            />
            <ul>
                {filteredUsers.map((user) => (
                    <li key={user.id}>
                        <h2>{user.name}</h2>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Effect;
