import React from 'react';
import './Users.css';
import axios from "axios";
import AvatarLogo from './../../assets/images/avatar_logo.png';

const Users = ({users, followUnfollow, setUsers}) => {

    const getUsers = () => {
        if(users.length === 0){
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    setUsers(response.data.items);
                });
        }
    };

    return (
        <div>
            <div className={'users-page-title'}>Users</div>
            <button onClick={() => {getUsers()}}>get users</button>
            <div className={'users'}>
                {
                    users.map(u => (
                            <div key={u.id} className={'user'}>
                                <div className={'ava-follow'}>
                                    <div>
                                        <img src={u.photo || AvatarLogo} alt={u.fullName} className={'usersPhoto'}/>
                                    </div>
                                    <div className={'follow'}>
                                        <button onClick={() => followUnfollow(u.id)}>{u.followed? 'Unfollow' : 'Follow'}</button>
                                    </div>
                                </div>
                                <div className={'bio'}>
                                    <div className={'name-status'}>
                                        <div className={'full-name'}>{u.fullName}</div>
                                        <div className={'status'}>{u.status}</div>
                                    </div>
                                    {u.location && <div className={'location'}>
                                        <div className={'country'}>{u.location.country},</div>
                                        <div className={'city'}>{u.location.city}</div>
                                    </div>}
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );
};

export default Users;