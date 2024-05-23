import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../redux/features/authSlice.js";

import Cookies from "js-cookie";

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isLoggedIn); //Get the state from redux store to check if user is logged in or not
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = Cookies.get("token");

  if (!token) {
    dispatch(logout()); //Set the state to false if token is not present in cookies in case of page refresh
  } else {
    dispatch(login()); //Set the state to true if token is present in cookies in case of page refresh
  }
  const setLogout = () => {
    Cookies.remove("token");
    dispatch(logout()); //Set the state to false if user clicks on logout button
    navigate("/login");
  };

  return (
    <>
      {/* <div className="navbar bg-base-100 min-h-[8vh] px-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </label>
                        <ul tabIndex={0}
                            className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/products'>Products</Link>
                            </li>
                            {
                                isAuthenticated &&
                                <>
                                    <li>
                                        <Link to='/cart'>Cart</Link>
                                    </li>
                                    <li>
                                        <Link to='/orders'>Orders</Link>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <Link to='/' className="btn btn-ghost hover:bg-transparent normal-case text-xl">MKART</Link>
                </div>
                <div className="navbar-end">
                    {
                        isAuthenticated ?
                            <button className="btn btn-ghost btn-outline" onClick={() => setLogout()}>
                                Logout
                            </button>
                            :
                            <Link to="/login">
                                <button className="btn btn-ghost btn-outline">
                                    Login
                                </button>
                            </Link>
                    }
                </div>
            </div> */}

      <header className="bg-dark">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Link to={"/"}>
              <span className="block text-teal-600 text-3xl">
                Hertz Gaming
              </span>
              </Link>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <Link to={"/"} 
                      className="text-white transition hover:text-gray-500/75"
                      href="#"
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link to={"/products"} 
                      className="text-white transition hover:text-gray-500/75"
                    >
                      Games
                    </Link>
                  </li>

                  {/* <li>
                    <Link to={"/"} 
                      className="text-white transition hover:text-gray-500/75"
                      href="#"
                    >
                      Category
                    </Link>
                  </li> */}

                  <li>
                  {
                                isAuthenticated &&
                                <>
                                    <li>
                                        <Link to='/orders'>Library</Link>
                                    </li>
                                </>
                            }
                  </li>

                  
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                {isAuthenticated ? (
                  <button
                    className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                    onClick={() => setLogout()}
                  >
                    Logout
                  </button>
                ) : (
                  <Link to="/login">
                    <button className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow">
                      Login
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
