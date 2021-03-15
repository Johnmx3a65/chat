import Users from './Users';
import {connect} from "react-redux";
import {followUnfollowAC, setUsersAC} from "../../redux/users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        followUnfollow: (id) => dispatch(followUnfollowAC(id)),
        setUsers: (users) => dispatch(setUsersAC(users))
    };
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;