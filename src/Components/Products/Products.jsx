import React from "react";

const Products = ({ img, title, price, desc }) => {
  console.log();

  return (
    //   <div className='box '>
    //      <img className='p-img' src={img} alt="" />
    //           <h3 className='h-heading'>{title}</h3>
    //           <p className='h-price'>${price}</p>

    //           <p className='h-para'>{desc}</p>
    //   </div>
    // )

    <>
   
    <div className="card">
      <div className="content">
        {/* Back Side */}
        <div className="back">
          <div className="back-content">
            {/* <svg
              stroke="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              height="50px"
              width="50px"
              fill="#ffffff"
            > */}
              {/* <g id="SVGRepo_iconCarrier"> */}
                {/* <path d="M20.84375 0.03125C20.191406 0.0703125 19.652344 0.425781 19.21875 1.53125C18.988281 2.117188 18.5 3.558594 18.03125 4.9375C17.792969 5.636719 17.570313 6.273438 17.40625 6.75C17.390625 6.796875 17.414063 6.855469 17.40625 6.90625C17.398438 6.925781 17.351563 6.949219 17.34375 6.96875L17.25 7.25C18.566406 7.65625 19.539063 8.058594 19.625 8.09375C22.597656 9.21875 28.351563 11.847656 33.28125 16.78125C38.5 22 41.183594 28.265625 42.09375 30.71875C42.113281 30.761719 42.375 31.535156 42.75 32.84375C42.757813 32.839844 42.777344 32.847656 42.78125 32.84375C43.34375 32.664063 44.953125 32.09375 46.3125 31.625C47.109375 31.351563 47.808594 31.117188 48.15625 31C49.003906 30.714844 49.542969 30.292969 49.8125 29.6875C50.074219 29.109375 50.066406 28.429688 49.75 27.6875C49.605469 27.347656 49.441406 26.917969 49.25 26.4375C47.878906 23.007813 45.007813 15.882813 39.59375 10.46875C33.613281 4.484375 25.792969 1.210938 22.125 0.21875C21.648438 0.0898438 21.234375 0.0078125 20.84375 0.03125Z"></path> */}
              {/* </g> */}
            {/* </svg> */}
            <img src={img} alt={title} className="p-img" />

            {/* <strong>{title}</strong> */}
          </div>
        </div>

        {/* Front Side */}
        <div className="front">
          <div className="img">
            {/* 🔹 OPTION 1: keep circles */}
            <div className="circle"></div>
            <div className="circle" id="right"></div>
            <div className="circle" id="bottom"></div>

            {/* 🔹 OPTION 2: replace circles with an image */}
            {/* <img src={img} alt={title} className="product-img" /> */}
          </div>

          <div className="front-content">
            <small className="badge">${price}</small>
            <div className="description">
              <div className="title">
                <p className="title">
                  <strong>{title}</strong>
                </p>
                <svg
                  height="15px"
                  width="15px"
                  viewBox="0,0,256,256"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#20c997">
                    <g transform="scale(8,8)">
                      <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <p className="card-footer">{desc} &nbsp; | &nbsp; 1 Serving</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  


    </>
  );
};

export default Products;
