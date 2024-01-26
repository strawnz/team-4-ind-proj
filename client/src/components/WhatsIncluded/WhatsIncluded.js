import "./WhatsIncluded.scss";
import dining from "../../assets/images/icons/dining.png"
import ent from "../../assets/images/icons/entertainment.png"
import ent2 from "../../assets/images/icons/entertainment2.png"
import games from "../../assets/images/icons/games.png"
import { Link } from "react-router-dom";

function WhatsIncluded() {
  return (
    <>
      <section className="whats-included">
        <h3 className="whats-included__heading">WHAT'S INCLUDED IN YOUR CRUISE</h3>
        <p className="whats-included__body">
          First time cruisers often want to know what’s included in their fare.
          And on Royal Caribbean®, the answer is a lot. Delicious <Link to="" className="whats-included__link">dining
          options</Link> for every meal — and snack — of the day, and plenty of variety
          for everyone. <Link to="" className="whats-included__link">Entertainment</Link> like nothing you’ve ever seen on stage,
          ice, water and in the air. Our award-winning <Link to="" className="whats-included__link">Adventure Ocean℠</Link> kids’
          program. Plus record-breaking and heart-racing slides, rides and
          activities you’ll only find on Royal Caribbean.
        </p>
        <article className="whats-included__features-top">
            <div className="whats-included__feature-container">
                <img src={dining} alt='dining icon'></img>
                <h4 className="whats-included__subheading">Complimentary Breakfast, Lunch, Dinner and Snacks</h4>
            </div>
            <div className="whats-included__feature-container">
                <img src={ent} alt='entertainment icon'></img>
                <h4 className="whats-included__subheading">Thrills You Won’t Find Elsewhere — No Passes Needed</h4>
            </div>
        </article>
        <article className="whats-included__features-bottom">
            <div className="whats-included__feature-container">
                <img src={ent2} alt='another entertainment icon'></img>
                <h4 className="whats-included__subheading">Spectacular Shows and There’s Never A Charge</h4>
            </div>
            <div className="whats-included__feature-container">
                <img src={games} alt='games icon'></img>
                <h4 className="whats-included__subheading">Award-Winning Kids And Teen Programs Included</h4>
            </div>
        </article>
      </section>
    </>
  );
}

export default WhatsIncluded;
