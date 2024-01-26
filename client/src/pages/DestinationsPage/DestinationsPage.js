import './DestinationsPage.scss';
import MiniNav from '../../components/MiniNav/MiniNav';
import Reviews from "../../components/Reviews/Reviews";

function DestinationsPage() {
    return (
        <>
        <section className='destinations-page'>
            <div className="heroimage">
                <h1 className="heroimage__header">FIRST CRUISE?</h1>
                <p className="heroimage__p">LET'S MAKE IT UNFORGETTABLE!</p>
            </div>
            <MiniNav />
            <Reviews /> 
        </section>
        </>
    )
}

export default DestinationsPage;