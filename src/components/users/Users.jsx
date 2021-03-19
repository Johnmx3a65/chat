import React from 'react';
import './Users.css';
import AvatarLogo from './../../assets/images/avatar_logo.png';
import {NavLink} from "react-router-dom";

const Users = ({users, totalUsersCount, pageSize, currentPage, followUnfollow, onPageChanged}) => {

    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p =>
                    <span
                        onClick={() => {
                            onPageChanged(p)
                        }}
                        className={currentPage === p ? 'active-page' : ''}
                        key={p}>{p}
                        </span>)}
            </div>
            <div className={'users-page-title'}>Users</div>
            <div className={'users'}>
                {
                    users.map(u => (
                            <div key={u.id} className={'user'}>
                                <div className={'ava-follow'}>
                                    <div>
                                        <NavLink to={'/profile/' +  u.id}>
                                            <img src={u.photos.small || AvatarLogo} alt={u.name} className={'usersPhoto'}/>
                                        </NavLink>
                                    </div>
                                    <div className={'follow'}>
                                        <button
                                            onClick={() => followUnfollow(u.id)}>{u.followed ? 'Unfollow' : 'Follow'}</button>
                                    </div>
                                </div>
                                <div className={'bio'}>
                                    <div className={'name-status'}>
                                        <div className={'full-name'}>{u.name}</div>
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
}

export default Users;