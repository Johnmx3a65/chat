import React from "react";
import ProfileInfoCss from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img  src={'https://images.template.net/wp-content/uploads/2015/08/Extraordinary-Beach-Background-Free-Download.png'} alt={"profile_back_img"}/>
            </div>
            <div className={ProfileInfoCss.description_block}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;