import React from 'react';
import style from './Page404.module.css'

import { useLocation, useNavigate } from 'react-router-dom';
function Page404() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
     <div className= {style.not_found}>
     <h3>404 Page</h3>
     <img
       src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
       alt="not found"
     />
      <p>
        The page <code>{location.pathname}</code> does not exist.
     </p>
     <button  onClick={() => {
          navigate('/');
        }}>Back to Home</button>
   </div>
  );
}

export default Page404;
