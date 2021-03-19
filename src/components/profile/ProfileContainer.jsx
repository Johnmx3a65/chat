import React from 'react';
import Profile from "./Profile";
import {connect} from 'react-redux';
import {getProfile} from '../../redux/profile-reducer'
import {withRouter} from "react-router";

class ProfileContainer extends React.Component{

    componentDidMount() {
        const id = this.props.match.params.id || 2;
        getProfile(id);
    }

    render(){
        return <Profile {...this.props}/>
    };

}

const mapStateToProps = (state) => ({
    avatar: state.profilePage.avatar,
    bio : state.profilePage.bio,
    id: state.profilePage.id,
    fullName: state.profilePage.fullName,
    isLoading: state.profilePage.isLoading,
});



export default connect(mapStateToProps, {getProfile})(withRouter(ProfileContainer));

