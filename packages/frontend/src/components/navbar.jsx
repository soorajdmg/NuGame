import { PropTypes } from 'prop-types'
export default function Navbar({access,setLoginClose,setSignupClose}){
    function HandleLoginonClick(){
        setLoginClose(false)
    }
    function HandleSignuponClick(){
        setSignupClose(false)
    }

    async function connectWallet() {
        try {
          // Code to connect to the user's wallet using Web3.js or a provider SDK
          const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
          console.log('Connected wallet:', accounts[0]);
          // (Optional) Update UI to indicate successful connection
        } catch (error) {
          console.error('Error connecting wallet:', error);
          // (Optional) Handle connection errors and display an error message to the user
        }
      }
    return(
        <div className="navbar">
            <h1>Nu<span className="color2">Game</span></h1>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li onClick={connectWallet}>Wallet</li>
                    <li>Games</li>
                    {
                        !access ? <li>Profile</li> : <><li onClick={HandleSignuponClick}>SignUp</li>
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