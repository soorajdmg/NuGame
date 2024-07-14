import { IoClose } from "react-icons/io5";
import PropTypes from 'prop-types';
import axios from 'axios';
import { useEffect, useState } from "react";

export default function Achevements({ setAchevementClose, achevementClose }) {
    function HandleOnClick() {
        setAchevementClose(true);
    }

    const [playTimeForever, setPlayTimeForever] = useState();
    const [maxKills, setMaxKills] = useState();

    useEffect(() => {
        async function fetchPlaytime() {
            try {
                const response = await axios.get('http://localhost:3000/playtime');
                console.log('Playtime response:', response.data.playTimeForever);
                setPlayTimeForever(response.data.playTimeForever);

            } catch (error) {
                console.error('Error fetching playtime:', error);
            }
        }

        async function fetchMaxKills() {
            try {
                const response = await axios.get('http://localhost:3000/maxkills');
                console.log('Max kills response:', response.data.maxKills);
                setMaxKills(response.data.maxKills);
            } catch (error) {
                console.error('Error fetching max kills:', error);
            }
        }

        fetchPlaytime();
        fetchMaxKills();
    }, []);

    return (
        <>
            {
                achevementClose ? null :
                <div className="modal2">
                    <div className="close">
                        <IoClose size={25} color="black" onClick={HandleOnClick} style={{ cursor: "pointer" }} />
                    </div>
                    <div className="modal2-heading">
                        <h3>Achievement List</h3>
                        <h3>Progress</h3>
                    </div>
                    <div className="modal2-content">
                        <h4>Complete more than 50 kills</h4>
                        {
                            maxKills !== null && maxKills >= 50 ? <h4>yes</h4> : <h4>no</h4>
                        }
                    </div>
                    <div className="modal2-content">
                        <h4>Complete more than 50 hours</h4>
                        {
                            playTimeForever !== null && (playTimeForever / 60) >= 50 ? <h4>yes</h4> : <h4>no</h4>
                        }
                    </div>
                </div>
            }
        </>
    );
}

Achevements.propTypes = {
    achevementClose: PropTypes.bool.isRequired,
    setAchevementClose: PropTypes.func.isRequired,
};
