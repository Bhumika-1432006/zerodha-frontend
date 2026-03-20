import React from 'react';
function Team() {
    return ( 
        <div className="container">
      <div className="row p-5 mt-5 mb-5  border-top ">
        <h2 className="text-center ">
         People
        </h2>
      </div>

      <div className="row p-5 mt-5 mb-5 text-muted fs-7"
      style={{ lineHeight: "1.9"}}
      >
        <div className="col p-5 text-center ">
        <img src="media/images/nithinKamath.jpg" style={{borderRadius:"100%" , width : "50%"}}></img>
        <h4 className="mt-5">Nithin Kamath</h4>
        <h6>Founder, CEO</h6>
        </div>
        <div className="col p-5">
            <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.<br/>
                He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).<br/>
                Playing basketball is his zen.
            </p>
            <p> Connect on 
           <a href='' style={{ textDecoration: "none"}}> Homepage </a> / <a href='' style={{ textDecoration: "none"}}> TradingQnA </a> / <a href='' style={{ textDecoration: "none"}}> Twitter</a>
            </p>
            <p>
            And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is  <a href=''  style={{ textDecoration: "none"}}> saying about us </a>or learn more about our business and product <a href=""  style={{ textDecoration: "none"}}>philosophies.</a>
            </p>
        </div>
      </div>
    </div>
     );
}

export default Team;