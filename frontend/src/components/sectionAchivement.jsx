import dollar from '../assets/dollar.webp'
export default function SectionAchivements(){
    return (
        <>
            <div className="section">
                <h1 className='subtexts'>Top Rewarding Achievements</h1>
                <div className="top-achivements">
                    <div className="card">
                    <div className="first-content">
                        <img src={dollar} alt="image" />
                    </div>
                    <div className="second-content">
                    <span>Create a my banner</span>
                    </div>

                    </div>
                    <div className="card">
                    <div className="first-content">
                        <img src={dollar} alt="image" />
                    </div>
                    <div className="second-content">
                    <span>Send 10,000 likes</span>
                    </div>

                    </div>
                    <div className="card">
                    <div className="first-content">
                        <img src={dollar} alt="image" />
                    </div>
                    <div className="second-content">
                    <span>K O 300 opponents in total</span>
                    </div>

                    </div>
                </div>
            </div>
        </>
    );
}
