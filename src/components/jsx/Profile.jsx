import React from "react";
import profile_css from '../css/Profile.module.css';

const Profile = () => {
    return (
        <div className={profile_css.content}>
            <div>
                <img  src={'https://images.template.net/wp-content/uploads/2015/08/Extraordinary-Beach-Background-Free-Download.png'} alt={"profile_back_img"}/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={'posts'}>
                    <div className={profile_css.item}>
                        post 1
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;