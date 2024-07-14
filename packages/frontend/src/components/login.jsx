import { IoClose } from "react-icons/io5";
import { PropTypes} from 'prop-types'
export default function Login({loginClose,setLoginClose,setSignupClose}){
    function HandleOnClick(){
        setLoginClose(true)
    }
    function HandleSigninOnClick(){
        setSignupClose(false)
    }
    return(
        <>
            {
                loginClose ? 
                    null :
                        <div className="modal">
                        <div className="close">
                            <IoClose size={25} color="white" onClick={HandleOnClick} style={{cursor:"pointer"}}/>
                        </div>
                        
                        <div className="login-form-cntnr">
                        <form className="form">
                        <p className="login">Log in</p>
                        <div className="inputContainer">
                            <input type="button" value="next" className="submit"></input>
                            <input placeholder="Enter your steam id" type="text" className="fInput email"></input>
                            <input placeholder="Enter your password" type="text" className="fInput pass"></input>
                        </div>
                        <button className="forget">forget password?</button>
                        <div className="con">
                            <p>don&#39;t have account?&nbsp;</p>
                            <a href="" onClick={HandleSigninOnClick}> sign in</a>
                        </div>
                        </form>
                        </div>
        
                    </div>
            }
            
        </>
    );
}

Login.propTypes ={
    setSignupClose:PropTypes.bool.isRequired,
    loginClose:PropTypes.bool.isRequired,
    setLoginClose:PropTypes.func.isRequired
}