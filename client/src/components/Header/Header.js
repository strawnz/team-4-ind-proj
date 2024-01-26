import './Header.scss';
import USA from "../../assets/images/icons/USA.svg";

function Header() {
    return (
        <>
        <header>
            <nav>
                <section className='header__secondary'>
                    <div className='country'>
                        <p className='header__text'>UNITED STATES</p>
                        <img src={USA} classname='icon__flag' alt='USA flag' />
                    </div>
                    <p>866-562-7625</p>
                </section>
            </nav>
        </header>
        </>
    )
};

export default Header;