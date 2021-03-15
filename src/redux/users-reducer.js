const FOLLOW_UNFOLLOW = 'FOLLOW-UNFOLLOW';
const SET_USERS = 'SET-USERS';

const initialState = {
    users : [
        /*{id: 1, followed: true, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDCzCegd0RpS_iYbsXhDsmAvnH76ysiV1umg&usqp=CAU', fullName: 'Dmitriy', status: 'I am a Boss', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, followed: false, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDCzCegd0RpS_iYbsXhDsmAvnH76ysiV1umg&usqp=CAU', fullName: 'Victoria', status: 'I am a Boss', location: {city: 'Sofia', country: 'Bulgaria'}},
        {id: 3, followed: false, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDCzCegd0RpS_iYbsXhDsmAvnH76ysiV1umg&usqp=CAU', fullName: 'Ivan', status: 'I am a Boss', location: {city: 'Kiev', country: 'Ukraine'}},
    */],

}

const usersReducer = (state=initialState, action) => {
    let copyState;

    switch (action.type) {
        case FOLLOW_UNFOLLOW:
            copyState = {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed : !u.followed};
                    }
                    return u;
                })
            };
            return copyState;
        case SET_USERS:{
             if(action.users){
                return {...state, users : [...state.users, ...action.users]};
            }
            return state;
        }
        default: return state;
    }

}

export const followUnfollowAC = (userId) => ({type: FOLLOW_UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;