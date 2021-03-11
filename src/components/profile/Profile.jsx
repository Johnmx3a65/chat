import React from "react";
import ProfileInfo from "./profile_info/ProfileInfo";
import './Profile.css'
import MyPostsContainer from "./my_posts/MyPostsContainer";

const Profile = ({profilePage, dispatch}) => {
    return (
        <div className={'profile-container'}>
            <ProfileInfo/>
            <MyPostsContainer posts={profilePage.posts} newPostText={profilePage.newPostText} dispatch={dispatch}/>
        </div>
    );
}

export default Profile;