import React from "react";
import './MyPosts.css'
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState();
                const dispatch = store.dispatch.bind(store);

                const updateText = (text) => {
                    dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
                };

                const onClick = (text, buttonName) => {
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
                };

                return <MyPosts updateText={updateText}
                         posts={state.profilePage.posts}
                         newPostText={state.profilePage.newPostText}
                         onClick={onClick}
                         dispatch={dispatch}/>
                }

            }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;