import { IoClose } from "react-icons/io5";
import { PropTypes} from 'prop-types'
export default function Signup({signupClose,setSignupClose}){
    function HandleOnClick(){
        setSignupClose(true)
    }
    return(
        <>
            {
                signupClose ? 
                    null :
                        <div className="modal">
                        <div className="close">
                            <IoClose size={25} color="white" onClick={HandleOnClick} style={{cursor:"pointer"}}/>
                        </div>
                        
                        <div className="login-form-cntnr">
                        <form className="form">
                        <p className="login">Sign Up</p>
                        <div className="inputContainer">
                            <input type="button" value="next" className="submit"></input>
                            <input placeholder="Enter your steam id" type="text" className="fInput email"></input>
                            <input placeholder="Enter your password" type="text" className="fInput pass"></input>
                            <input placeholder="Enter your password" type="text" className="fInput pass"></input>
                        </div>
                        
                        </form>
                        </div>
        
                    </div>
            }
            
        </>
    );
}

Signup.propTypes ={
    signupClose:PropTypes.bool.isRequired,
    setSignupClose:PropTypes.func.isRequired
}