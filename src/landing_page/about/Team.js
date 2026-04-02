import React from 'react';

function Team() {
  return (
    <div className="container">
      <div className="row p-3 p-md-5 mt-5 mb-0 border-top">
        <h2 className="text-center">People</h2>
      </div>

      <div className="row p-3 p-md-5 text-muted" style={{ lineHeight: "1.9" }}>
        {/* Image Column: Full width on mobile, half on desktop */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img 
            src="media/images/nithinKamath.jpg" 
            alt="Nithin Kamath"
            style={{ borderRadius: "100%", width: "60%", maxWidth: "250px" }} 
          />
          <h4 className="mt-4">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>

        {/* Bio Column: Full width on mobile, half on desktop */}
        <div className="col-12 col-md-6">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>
            Connect on: 
            <a href='' className="mx-1" style={{ textDecoration: "none" }}>Homepage</a> / 
            <a href='' className="mx-1" style={{ textDecoration: "none" }}>Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;