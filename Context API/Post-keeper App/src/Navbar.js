import { useState } from "react";
import { usePosts } from "./postContext";

export const Navbar = () => {

  const { savedPosts, showSavedList, setShowSavedList, reset } = usePosts();

  return (
    <div className="navbar">
      <span onClick={() => setShowSavedList(!showSavedList)}>
        Saved Posts: {savedPosts.length}{/* show length of saved posts here */}
      </span>
      {showSavedList && (
        <div className="saved-list">
          {savedPosts.map((p) => (
            <div className="saved-post" key={p.id}>
              <h3>{p.text}</h3>
              <img src={p.img} alt={p.text} />
            </div>
          ))}
        </div>
      )}
      {/* Add onClick functionality for the reset button */}
      <button onClick={reset}>Reset</button>
    </div>
  );
};
