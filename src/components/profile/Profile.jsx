import React from "react";
import MyPosts from "./my_posts/MyPosts";
import ProfileInfo from "./profile_info/ProfileInfo";
import './Profile.css'

const Profile = ({profilePage, dispatch}) => {
    return (
        <div className={'profile-container'}>
            <ProfileInfo/>
            <MyPosts posts={profilePage.posts} newPostText={profilePage.newPostText} dispatch={dispatch}/>
        </div>
    );
}

export default Profile;