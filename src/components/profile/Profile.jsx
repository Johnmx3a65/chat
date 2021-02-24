import React from "react";
import profile_css from './Profile.module.css';
import MyPosts from "./my_posts/MyPosts";

const Profile = () => {
    return (
        <div className={profile_css.content}>
            <div>
                <img  src={'https://images.template.net/wp-content/uploads/2015/08/Extraordinary-Beach-Background-Free-Download.png'} alt={"profile_back_img"}/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;