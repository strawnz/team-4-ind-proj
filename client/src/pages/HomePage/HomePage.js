import MiniNav from "../../components/MiniNav/MiniNav";
import Main from "../../components/Main/Main";
import WhatsIncluded from "../../components/WhatsIncluded/WhatsIncluded";
import './HomePage.scss';

function HomePage() {
    return (
        <>
            <section>
                <div className="hero-image">
            <h1>FIRST CRUISE?</h1>
            <p>LET'S MAKE IT UNFORGETTABLE!</p>
                </div>
                <MiniNav />
                <Main />
                <WhatsIncluded />
            </section>
        </>
    );
};

export default HomePage;