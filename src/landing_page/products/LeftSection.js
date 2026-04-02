import React from 'react';
function LeftSection({
imageURL,
productName,
productDescription,
tryDemo,
learnMore,
googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3&hl=en_IN",
appStore,
}) {
    return ( 
      <div className='container border-bottom mb-7'>
        <div className='row '>
            <div className='col-6 p-5'>
                <img src={imageURL}  alt=""></img>
            </div>

            <div className='col-1'>
            {/* this is for the padding in between the two cols */}
            </div>
            <div className='col-5 p-5  text-muted' style={{ lineHeight: "1.9"}}>
                <h1>{productName}</h1>
                <p>{productDescription}</p>
            
                <div>
                    <a href={"http://localhost:3001"} style={{textDecoration:"none"}}>Try Demo →</a>
                    <a href={learnMore} style={{marginLeft:"50px" , textDecoration:"none"}}>Learn More →</a>
                    
                </div>
                
                <div className='mt-4'>
                    <a href={googlePlay}>
                    <img src="media/images/googlePlayBadge.svg"  alt=""></img>
                    </a>
                    <a href={appStore}>
                    <img src="media/images/appstoreBadge.svg"  alt=""></img>
                   </a>
                   </div>
                
            </div>

        </div>
      </div>
     );
}

export default LeftSection;