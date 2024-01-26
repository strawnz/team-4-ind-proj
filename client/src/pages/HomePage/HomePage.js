import MiniNav from "../../components/MiniNav/MiniNav";
import Main from "../../components/Main/Main";
import NextAdventure from "../../components/NextAdventure/NextAdventure";
import WhatsIncluded from "../../components/WhatsIncluded/WhatsIncluded";
import FirstCruise from "../../components/FirstCruise/FirstCruise";
import './HomePage.scss';

function HomePage() {
    return (
        <>
            <section>
                <div className="heroimage">
                    <h1 className="heroimage__header">FIRST CRUISE?</h1>
                    <p className="heroimage__p">LET'S MAKE IT UNFORGETTABLE!</p>
                </div>
                <MiniNav />
                <Main />
                <NextAdventure /> 
                <WhatsIncluded />
                <FirstCruise />
            </section>
        </>
    );
};

export default HomePage;