import heroImage from "../../assets/images/icons/Rectangle-1.svg";
import './HomePage.scss';

function HomePage() {
    return (
        <>
            <main>
                <img src={heroImage} alt="Hero" className="hero-image" />
            </main>
        </>
    );
};

export default HomePage;