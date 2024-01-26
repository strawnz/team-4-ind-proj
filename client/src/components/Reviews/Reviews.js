import "./Reviews.scss";
import review1 from "../../assets/images/icons/Frame1.svg";
import review2 from "../../assets/images/icons/Frame2.svg";
import review3 from "../../assets/images/icons/Frame3.svg";
import review4 from "../../assets/images/icons/Frame4.svg";
import review5 from "../../assets/images/icons/Frame5.svg";
import review6 from "../../assets/images/icons/Frame6.svg";
import review7 from "../../assets/images/icons/Frame7.svg";
import review8 from "../../assets/images/icons/Frame8.svg";
import review9 from "../../assets/images/icons/Frame9.svg";
import review10 from "../../assets/images/icons/Frame10.svg";
import { Link } from "react-router-dom";

function Reviews() {
    return (
        <>
            <section className="reviews">
                <h2>reviews from first-time cruisers</h2>
                
                <section className="reviews_grid">
                    <img src={review1} />
                    <img src={review2} />
                    <img src={review3} />
                    <img src={review4} />
                    <img src={review5} />
                    <img src={review6} />
                    <img src={review7} />
                    <img src={review8} />
                    <img src={review9} />
                    <img src={review10} />
                </section>
            </section>
        </>
    );
}

export default Reviews;