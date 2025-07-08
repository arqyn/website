import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero-section-new">
      <div className="hero-container-new">
        <div className="hero-main-text hero-fade-in">ARQYN</div>

        <div className="hero-content-grid">
          <div className="hero-left hero-slide-left">
            <div className="hero-subtitle">CIVIC TECH STARTUP</div>
            <div className="hero-subtitle">REMOTE BASED</div>
          </div>

          <div className="hero-right hero-slide-right">
            <div className="hero-tagline">Building Technology for</div>
            <div className="hero-tagline-highlight">Social Good</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
