import "./FirstCruise.scss";
import best1 from '../../assets/images/icons/best1.png';
import best2 from '../../assets/images/icons/best2.png';
import best3 from '../../assets/images/icons/best3.png';

function FirstCruise() {
  return (
    <>
      <section className="first-cruise">
        <article className="first-cruise__text-container">
            <h3 className="first-cruise__title">TAKE YOUR FIRST CRUISE WITH THE BEST</h3>
          <p className="first-cruise__body">
            There’s a reason Royal Caribbean® is the cruise line voted Best
            Overall for 21 years running by Travel Weekly readers. Actually,
            there are several— starting with the biggest fleet of the most
            innovative, adventure-filled ships at sea. And award-winning private
            destinations, like Perfect Day at CocoCay, voted Best Private Island
            for the past four years.
          </p>
        </article>
        <article className="first-cruise__image-container">
            <img src={best1} />
            <img src={best2} />
            <img src={best3} />
        </article>
      </section>
    </>
  );
}

export default FirstCruise;
