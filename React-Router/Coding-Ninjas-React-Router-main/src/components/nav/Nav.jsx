import React from "react";
import style from "./Nav.module.css";
import { useNavigate, Outlet, NavLink } from "react-router-dom";

function Nav() {
  const navigate = useNavigate(); // Retrieve the navigate function using useNavigate()

  const backHome = () => {
      navigate('/');
  }

  return (
    <>
    <nav>
      <div className={style.nav_container}>
        <div className={style.nav_title_wrapper}>
          <img onClick={backHome}
            className={style.logo}
            src="https://t4.ftcdn.net/jpg/01/69/54/43/360_F_169544306_Chgu4HKywaICITxIM6KF3ESKN22sAQiD.jpg"
            alt="logo"
          />
          <h4>LearnEase platform</h4>
        </div>
        <div className={style.nav_details}>
          <button className={style.nav_btn}>
            <NavLink to='/courses' className={style.navlink}>  
                {({isActive}) => (isActive ? "On Courses" : "Go to Course")}
            </NavLink>
          </button>
        </div>
      </div>
      
    </nav>
    <Outlet />
    </>
  );
}

export default Nav;

//  <img
//    alt='cart-icon'
//    src='https://cdn-icons-png.flaticon.com/512/4903/4903482.png'
//    className={`${style.cart_icon} ${style.icon} `}
//  />;
