import React from "react";
import ProfileInfo from "./profile_info/ProfileInfo";
import './Profile.css'
import MyPostsContainer from "./my_posts/MyPostsContainer";

const Profile = () => {
    return (
        <div className={'profile-container'}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;