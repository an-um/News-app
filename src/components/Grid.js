const Grid = () =>{
    return(
        <div className="container my-4 pt-3">
    <div className="row">
        {/* 1st col  */}
      <div className="col-12 col-xl-4 col-lg-4 ">
        <div className="row mb-3">
          <div className="col-3 m-1 p-0">
            <img src={require("../images/image-retro-pcs.jpg")} alt="" width="90px" height="150px" />
          </div>
          <div className="col ms-2">
            <h4 className="text-secondary mb-1">01</h4>
            <h6 className="fw-bold">Reviving Retro PCs</h6>
            <p className="fs-6 m-0"> What happens when old PCs are given modern upgrades? </p>
          </div>
  
        </div>
      </div>
       {/* 2nd col  */}
      <div className="col-12 col-xl-4 col-lg-4 ">
        <div className="row mb-3">
          <div className="col-3 m-1 p-0">
            <img src={require("../images/image-top-laptops.jpg")} alt="" width="90px" height="150px"/>
          </div>
          <div className="col ms-2">
            <h4 className="text-secondary m-0">02</h4>
            <h5 className="fs-6 fw-bold"> Top 10 Laptops of 2022 </h5>
            <p className="fs-6 m-0">Our best picks for various needs and budgets.</p>
          </div>
  
        </div>
      </div>
         {/* 3rd col */}
      <div className="col-12 col-xl-4 col-lg-4 ">
        <div className="row">
          <div className="col-3 m-1 p-0">
            <img src={require("../images/image-gaming-growth.jpg")} alt="" width="90px" height="150px" />
          </div>
          <div className="col ms-2">
            <h4 className="text-secondary m-0">03</h4>
            <h5> The Growth of Gaming</h5>
            <p className="fs-6 m-0"> How the pandemic has sparked fresh opportunities.</p>
          </div>
  
        </div>
      </div>
    </div>
    </div>
    );
}

export default Grid;