import "./Main.scss";

function Main() {
  return (
    <main className="main">
      <article className="article" id="left">
        <div className="article-image__kayaks"></div>
        <div className="article-text">
          <h2 className="article-text__heading">Adventure for All Ages</h2>
          <p className="article-text__body">
            Join us on a cruise where adventures await for all ages, from water
            slides and interactive kids’ clubs and captivating shore excursions.
            It’s the perfect blend of excitement and relaxation, ensuring every
            family member discovers their ideal vacation experience.{" "}
          </p>
        </div>
      </article>

      <article className="article" id="right">
        <div className="article-text">
          <h2 className="article-text__heading">
            You Will be Well Taken Care Of
          </h2>
          <p className="article-text__body">
            Embark on a Caribbean Cruise and discover a world where adventure
            meets relaxation, with breathtaking destinations at your doorstep
            and endless entertainment on board. Experience the thrill of
            exploring new horizons and the luxury of having every need catered
            to, all while sailing across the majestic ocean.
          </p>
        </div>
        <div className="article-image__mom"></div>
      </article>
      <article className="article" id="left">
        <div className="article-image__beach"></div>
        <div className="article-text">
          <h2 className="article-text__heading">Wander the World Over</h2>
          <p className="article-text__body">
            Sailing on a Caribbean Cruise ship offers the unique opportunity to
            wake up in a new corner of the world each day-immersing yourself in
            diverse cultures, cuisines, and breathtaking landscapes.
          </p>
        </div>
      </article>

      <article className="article" id="right">
        <div className="article-text">
          <h2 className="article-text__heading">Convenience Mode Set to Max</h2>
          <p className="article-text__body">
            With Caribbean Cruises, convenience is at your fingertips, offering
            the luxury of multiple destinations without the hassle of constant
            packing and unpacking. Enjoy seamless travel with world-class
            amenities, diverse dining options, and entertainment all under one
            roof as you sail to your next adventure.
          </p>
        </div>
        <div className="article-image__maria"></div>
      </article>

     
    </main>
  );
}

export default Main;
