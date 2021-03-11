import {connect} from "react-redux";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
    return {
        posts : state.profilePage.posts,
        newPostText : state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        updateText: (text) => dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text}),
        onClick: (text, buttonName) => {
            if (text) {
                switch (buttonName) {
                    case 'add_post' :
                        dispatch({type: 'ADD-POST'});
                        break;
                    case 'remove_text' :
                        dispatch({type: 'DELETE-TEXTAREA-TEXT'});
                        break;
                    default :
                        dispatch({type: 'error'});
                }
            } else {
                //showModal
            }
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;