import { PropTypes } from 'prop-types'
export default function Navbar({access,setLoginClose,setSignupClose}){
    function HandleLoginonClick(){
        setLoginClose(false)
    }
    function HandleSignuponClick(){
        setSignupClose(false)
    }
    return(
        <div className="navbar">
            <h1>ACHIVE<span className="color2">MEINT</span></h1>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Wallet</li>
                    <li>Games</li>
                    {
                        access ? <li>Profile</li> : <><li onClick={HandleSignuponClick}>SignUp</li>
                    <li onClick={HandleLoginonClick}>Login</li></>
                    }
                </ul>
            </div>
        </div>  
    );
}
Navbar.propTypes = {
    access: PropTypes.bool.isRequired,
    setLoginClose:PropTypes.func.isRequired,
    setSignupClose:PropTypes.func.isRequired
}