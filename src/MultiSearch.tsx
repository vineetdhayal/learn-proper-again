import React, { useEffect, useState } from 'react';
import './Search.css'

const MultiSearch = () => {
    const [searchTerm, setSearchTerm]: any = useState('');
    const [suggestions, setSuggestions]: any = useState([]);
    const [selectedUsers, setSelectedUsers]: any = useState([]);
    const [selectedUsersSet, setSelectedUsersSet]: any = useState(new Set());

    const fetchUsers = async () => {
        if (searchTerm === '') {
            setSuggestions([]);
        }
        const res = await fetch(`https://dummyjson.com/users/search?q=${searchTerm}`);
        const data = await res.json();
        console.log(data);
        setSuggestions(data.users);
    };

    useEffect(() => { fetchUsers() }, [searchTerm]);

    const handleSelectedUser: any = (user: any) => {
        setSelectedUsers([...selectedUsers, user]);
        setSelectedUsersSet(new Set([...selectedUsersSet, user.email]));
        console.log(selectedUsersSet);
        setSearchTerm('');
        setSuggestions([]);
    }

    return (
        <div className='user-search-container'>
            <div className='user-search-input'>
                <input type='text' value={searchTerm} autoFocus onChange={(e) => setSearchTerm(e.target.value)}></input>
            </div>
            <ul className='suggestion-list'>{suggestions.length > 0 && suggestions?.map((s: any) => {
                return !selectedUsersSet.has(s.email) && <li style={{ cursor: 'pointer' }} key={s.email} onClick={() => handleSelectedUser(s)}>
                    {/* <img src={s.image}></img> */}
                    <span>{s.firstName}{s.lastName}</span>/
                </li>
            })}</ul>
        </div>
    )
}

export default MultiSearch
