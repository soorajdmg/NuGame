import image from '../assets/valorant.avif'
export default function Card(){
    return (
        <>
            <div className="card">
            <div className="first-content">
                <img src={image} alt="image" />
            </div>
            <div className="second-content">
            <span>Valorant</span>
            </div>

            </div> 
        </>
    );
}

