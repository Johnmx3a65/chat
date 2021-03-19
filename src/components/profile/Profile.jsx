import React from "react";
import ProfileInfo from "./profile_info/ProfileInfo";
import './Profile.css'
import MyPostsContainer from "./my_posts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={'profile-container'}>
            <ProfileInfo bio={props.bio} avatar={props.avatar} fullName={props.fullName} isLoading={props.isLoading}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;