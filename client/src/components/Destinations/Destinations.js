import "./Destinations.scss";
import shipIcon from "../../assets/svg/ship-line.svg";
import heartIcon from "../../assets/svg/ph_heart.svg";
import downloadIcon from "../../assets/svg/mynaui_download.svg";
function DestinationsCards() {
  return (
    <section className="destinations">
      <div className="destinations-card">
        <div className="destinations-card1" alt="caribbean beach">
          <div className="destinations-details">
            <button className="destinations-button" disabled>
              8 Nights
            </button>
            <h2 className="destinations-heading">
              Eastern Caribbean & Perfect Day
            </h2>
          </div>
          <div className="destinations-price">
            <p>AVG PER PERSON*</p>
            <h2>$1,139</h2>
          </div>
        </div>
        <div className="destinations-bottom">
          <div className="destinations-bottom__left">
            <div className="destinations-bottom__ship">
              <img src={shipIcon} alt="ship icon" />
              <h2 className="destinations-bottom__heading">
                Symphony of the Seas
              </h2>
            </div>
            <p className="destinations-bottom__body">
              ROUNDTRIP FROM:<span> Cape Liberty (New York), New Jersey</span>
            </p>
            <p className="destinations-bottom__body">
              VISITING:<span></span> Orlando (Port Canaveral), Florida • Perfect
              Day at CocoCay, Bahamas • Cozumel, Mexico • Roatan, Honduras •
              Puerto Costa Maya, Mexico • Orlando, Florida
            </p>
          </div>
          <div className="destinations-bottom__right">
            <div className="destinations-bottom__right-icons">
              <img src={heartIcon} alt="heart icon" />
              <img src={downloadIcon} alt="download icon" />
            </div>
            <button>EXPLORE</button>
          </div>
        </div>
      </div>

      <div className="destinations-card">
        <div className="destinations-card2" alt="caribbean carnival">
          <div className="destinations-details">
            <button className="destinations-button" disabled>
              7 Nights
            </button>
            <h2 className="destinations-heading">
              Western Caribbean & Perfect Day
            </h2>
          </div>
          <div className="destinations-price">
            <p>AVG PER PERSON*</p>
            <h2>$1,799</h2>
          </div>
        </div>
        <div className="destinations-bottom">
          <div className="destinations-bottom__left">
            <div className="destinations-bottom__ship">
              <img src={shipIcon} alt="ship icon" />
              <h2 className="destinations-bottom__heading">
                Symphony of the Seas
              </h2>
            </div>
            <p className="destinations-bottom__body">
              ROUNDTRIP FROM: <span>Orlando (Port Canaveral), Florida</span>
            </p>
            <p className="destinations-bottom__body">
              VISITING:
              <span>
                {" "}
                Orlando (Port Canaveral), Florida • Perfect Day at CocoCay,
                Bahamas • Cozumel, Mexico • Roatan, Honduras • Puerto Costa
                Maya, Mexico • Orlando, Florida
              </span>
            </p>
          </div>
          <div className="destinations-bottom__right">
            <div className="destinations-bottom__right-icons">
              <img src={heartIcon} alt="heart icon" />
              <img src={downloadIcon} alt="download icon" />
            </div>
            <button>EXPLORE</button>
          </div>
        </div>
      </div>
      <div className="destinations-card">
        <div className="destinations-card3" alt="bahamanian beach">
          <div className="destinations-details">
            <button className="destinations-button" disabled>
              7 Nights
            </button>
            <h2 className="destinations-heading">Perfect Day Bahamas Cruise</h2>
          </div>
          <div className="destinations-price">
            <p>AVG PER PERSON*</p>
            <h2>$1,799</h2>
          </div>
        </div>
        <div className="destinations-bottom">
          <div className="destinations-bottom__left">
            <div className="destinations-bottom__ship">
              <img src={shipIcon} alt="ship icon" />
              <h2 className="destinations-bottom__heading">
                Symphony of the Seas
              </h2>
            </div>
            <p className="destinations-bottom__body">
              ROUNDTRIP FROM: <span>Cape Liberty (New York), New Jersey</span>
            </p>
            <p className="destinations-bottom__body">
              VISITING:
              <span>
                {" "}
                Cape Liberty (New York), New Jersey • Orlando (Port Canaveral),
                Florida • Perfect Day at CocoCay, Bahamas • Labadee, Haiti, Cape
                Liberty (New York), New Jersey
              </span>
            </p>
          </div>
          <div className="destinations-bottom__right">
            <div className="destinations-bottom__right-icons">
              <img src={heartIcon} alt="heart icon" />
              <img src={downloadIcon} alt="download icon" />
            </div>
            <button>EXPLORE</button>
          </div>
        </div>
      </div>

      <div className="destinations-card">
        <div className="destinations-card4" alt="southern caribbean coast">
          <div className="destinations-details">
            <button className="destinations-button" disabled>
              8 Nights
            </button>
            <h2 className="destinations-heading">Southern Caribbean Cruise</h2>
          </div>
          <div className="destinations-price">
            <p>AVG PER PERSON*</p>
            <h2>$1,139</h2>
          </div>
        </div>
        <div className="destinations-bottom">
          <div className="destinations-bottom__left">
            <div className="destinations-bottom__ship">
              <img src={shipIcon} alt="ship icon" />
              <h2 className="destinations-bottom__heading">
                Symphony of the Seas
              </h2>
            </div>

            <p className="destinations-bottom__body">
              ROUNDTRIP FROM: <span>Cape Liberty (New York), New Jersey</span>
            </p>
            <p className="destinations-bottom__body">
              VISITING:
              <span>
                {" "}
                Cape Liberty (New York), New Jersey • Orlando (Port Canaveral),
                Florida • Perfect Day at CocoCay, Bahamas • Labadee, Haiti, Cape
                Liberty (New York), New Jersey
              </span>
            </p>
          </div>
          <div className="destinations-bottom__right">
            <div className="destinations-bottom__right-icons">
              <img src={heartIcon} alt="heart icon" />
              <img src={downloadIcon} alt="download icon" />
            </div>
            <button>EXPLORE</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DestinationsCards;
