import {usersAPI} from "../api/api";

const FOLLOW_UNFOLLOW = 'FOLLOW-UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const SET_IS_LOADING = 'SET-IS-LOADING';
const SET_FAILURE_RESPONSE = 'SET-FAILURE-RESPONSE';

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2,
    isLoading: true,
    isFailedResponse: false,
}

const usersReducer = (state = initialState, action) => {
    let copyState;

    switch (action.type) {
        case FOLLOW_UNFOLLOW:
            copyState = {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed};
                    }
                    return u;
                })
            };
            return copyState;
        case SET_USERS: {
            if (action.users) {
                return {...state, users: [...action.users]};
            }
            return state;
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage};
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.usersCount};
        }
        case SET_IS_LOADING: {
            return {...state, isLoading: action.isLoading};
        }
        case SET_FAILURE_RESPONSE: {
            return {...state, isFailedResponse: action.isFailedResponse};
        }
        default:
            return state;
    }

}

export const actions = {
    followUnfollow : (userId) => ({type: FOLLOW_UNFOLLOW, userId}),
    setUsers : (users) => ({type: SET_USERS, users}),
    setCurrentPage : (currentPage) => ({type: SET_CURRENT_PAGE, currentPage}),
    setTotalCount : (usersCount) => ({type: SET_TOTAL_COUNT, usersCount}),
    setIsLoading : (isLoading) => ({type:SET_IS_LOADING, isLoading}),
    setFailureResponse : (isFailedResponse) => ({type: SET_FAILURE_RESPONSE, isFailedResponse}),
}

export const getUsersThunkCreator = (currentPage, pageSize, isFailedResponse) => dispatch =>{
    dispatch(actions.setIsLoading(true));

    if (isFailedResponse) {
        dispatch(actions.setIsLoading(false));
    } else {
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(actions.setUsers(data.items));
            dispatch(actions.setTotalCount(data.totalCount));
            dispatch(actions.setIsLoading(false));
        }).catch(() => {
            dispatch(actions.setFailureResponse(true));
        });
    }
}

export default usersReducer;