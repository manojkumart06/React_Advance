// create post context here
import { createContext, useContext, useState } from "react";

const postContext = createContext();

// Create custom hook that returns context value here
function usePosts(){
    const posts = useContext(postContext);
    return posts;
}

// create a custom saved post provider here with add and reset functions
function PostContextProvider({children}){     
    const [savedPosts, setSavedPosts] = useState([]);
    const [showSavedList, setShowSavedList] = useState(false);

    const addPost = (post) => {
        setSavedPosts([...savedPosts, post]);
    }
   
    const reset = () => {
        setSavedPosts([]);
        setShowSavedList(false);
    }

    return (
        <postContext.Provider value = {{savedPosts,showSavedList,setShowSavedList,addPost,reset}}>

            {children}
        </postContext.Provider>
    )
}


export {usePosts}
export default PostContextProvider;