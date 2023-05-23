const Home = () => {
    return(
        <div className="container">
    <div className="row ">
        {/* 1st col  */}
    <div className="col-12 col-sm-8">
      <div className="row mb-3">
        <img src={require("../images/image-web-3-desktop.jpg")} alt="" className="d-none d-xl-block d-xxl-block" />
       <img src={require("../images/image-web-3-mobile.jpg")} alt="" className=" d-block d-xl-none" />
      </div>
      <div className="row mb-3">
        <div className="col-12 col-sm-6">
         <h1 className="fw-bold"> The Bright Future of Web 3.0?</h1>
         
        </div>
        <div className="col-12 col-sm-6"> 
         <p className="fs-6 text-secondary"> We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
          But is it really fulfilling its promise? </p>
        <button className="btn btn-danger px-4"> Read More</button>
        </div>
      </div>

    </div>
       {/* 2nd col  */}
    <div className="col-12 col-sm-4 bg-dark text-white">
      <h3 className="text-warning m-3 my-4 fw-bold">New</h3>
      <div>
        <h6>Hydrogen VS Electric Cars</h6>
        <p className="text-secondary p-2">Will hydrogen-fueled cars ever catch up to EVs?</p>
      </div>
      <hr />
      <div>
        <h6>The Downsides of AI Artistry</h6>
        <p className="text-secondary p-2">What are the possible adverse effects of on-demand AI image generation?</p>
      </div>
      <hr />
      <div>
        <h6>Is VC Funding Drying Up?</h6>
        <p className="text-secondary p-2">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
      </div>
    </div>
    </div>
  </div>

    );
}

export default Home;