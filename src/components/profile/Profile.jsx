import React from "react";
import ProfileCss from './Profile.module.css';
import MyPosts from "./my_posts/MyPosts";
import ProfileInfo from "./profile_info/ProfileInfo";

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts message={"It's amazing!"}/>
        </div>
    );
}

export default Profile;