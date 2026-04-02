import React from "react";

function Hero() {
  return (
    <div className="container">
      {/* Heading Section */}
      <div className="row p-3 p-md-5 mt-5 mb-5">
        <h2 className="text-center fs-2">
          We pioneered the discount broking model in India.
          <br className="d-none d-md-block" />
          Now, we are breaking ground with our technology.
        </h2>
      </div>

      {/* Content Section: col-12 makes them stack vertically on mobile */}
      <div className="row p-3 p-md-5 border-top text-muted" style={{ lineHeight: "1.9", fontSize: "1rem" }}>
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India. 
            We named the company Zerodha, a combination of Zero and "Rodha", 
            the Sanskrit word for barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house
            technology have made us the biggest stock broker in India.
          </p>
          <p>
            Over 1.6+ crore clients place billions of orders every year through our
            powerful ecosystem of investment platforms.
          </p>
        </div>
        
        <div className="col-12 col-md-6">
          <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
          <p>
            <a href='' style={{ textDecoration: "none" }}>Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups.
          </p>
          <p>
            Catch up on the latest updates on our blog or see what the media is <a href='' style={{ textDecoration: "none" }}>saying about us</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;