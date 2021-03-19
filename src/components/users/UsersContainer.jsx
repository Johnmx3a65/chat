import {connect} from "react-redux";
import React from "react";
import {actions, getUsersThunkCreator} from "../../redux/users-reducer";
import Users from "./Users";
import PreLoader from "./pre_loader/PreLoader";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize, this.props.isFailedResponse);
    }

    componentWillUnmount() {
        this.props.setFailureResponse(false);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize, this.props.isFailedResponse);
    }

    render() {
        return (
            this.props.isFailedResponse ? <div>Failed response</div> :
                this.props.isLoading ? <PreLoader/> : <Users {...this.props} onPageChanged={this.onPageChanged}/>);
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        isFailedResponse: state.usersPage.isFailedResponse,
    };
}

export default connect(mapStateToProps, {...actions, getUsers: getUsersThunkCreator})(UsersContainer);
