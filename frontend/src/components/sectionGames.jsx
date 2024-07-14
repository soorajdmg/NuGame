import Card from "./card";
import game1 from '../assets/game1.jpg'
import game2 from '../assets/game2.jpg'
import game3 from '../assets/game4.jpg'
import { PropTypes } from 'prop-types'
export default function SectionGames({setAchevementClose}){
    function HandleOnClick(){
        setAchevementClose(false)
    }
    return (
        <>
            <div className="section">
                <h1 className='subtexts'>Trending Games</h1>
                <div className='top-achivements'>
                <div className="card">
                <div className="first-content">
                    <img src={game1} alt="image" />
                </div>
                <div className="second-content">
                <span>Nfs Heat</span>
                </div>

                </div>
                <div className="card" onClick={HandleOnClick}>
                <div className="first-content">
                    <img src={game2} alt="image" />
                </div>
                <div className="second-content">
                <span>Battle Field</span>
                </div>

                </div>
                <div className="card">
                <div className="first-content">
                    <img src={game3} alt="image" />
                </div>
                <div className="second-content">
                <span>GenshinImpact</span>
                </div>

                </div>
                <Card />
                </div>
            </div>
        </>
    );
}
SectionGames.propTypes = {
    setAchevementClose: PropTypes.func
}