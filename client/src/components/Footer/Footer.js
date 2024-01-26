import rcgLogo from '../../assets/images/icons/rcg-logo-vertical.svg';
import whiteLogo from '../../assets/images/icons/royal-caribbean-logo-white.svg';
import celebrityLogo from '../../assets/images/icons/celebrity-cruises-logo.svg';
import silverseaLogo from '../../assets/images/icons/silversea-logo-white.svg';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <img src={rcgLogo} className='rcglogo'/>

      <div className='footerpics'>
        <img src={whiteLogo} className='whitelogo' />
        <img src={celebrityLogo} className='celebritylogo' />
        <img src={silverseaLogo} className='silversealogo' />
      </div>


    </footer>
  );
}

export default Footer;