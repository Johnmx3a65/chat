import React from "react";
import MyPosts from "./my_posts/MyPosts";
import ProfileInfo from "./profile_info/ProfileInfo";
import './Profile.css'

const Profile = ({posts}) => {
    return (
        <div className={'profile-container'}>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    );
}

export default Profile;