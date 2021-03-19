import React from "react";
import './ProfileInfo.css'
import DefaultAvatar from '../../../assets/images/avatar_logo.png';
import PreLoader from "../../users/pre_loader/PreLoader";

const ProfileInfo = ({avatar, bio, fullName, isLoading}) => {
    return (
        <div>
            <div>
                <img  src={'https://images.template.net/wp-content/uploads/2015/08/Extraordinary-Beach-Background-Free-Download.png'} alt={"profile_back_img"}/>
            </div>
            {isLoading ?  <PreLoader style={{height: '50px', width: '50px'}}/> :
            <div className={'description_block'}>
                <img src={avatar || DefaultAvatar} style={{height: 50, width: 50}} alt={'avatar'}/> <br/>
                <span>{fullName}</span> <br/>
                <span>{bio}</span>
            </div>
            }
        </div>
    );
}

export default ProfileInfo;