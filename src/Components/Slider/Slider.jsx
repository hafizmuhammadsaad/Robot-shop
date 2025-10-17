import React from 'react'

const Slider = () => {
  return (
    <div>
        <div>
                <div id="carouselExample" class="carousel slide" style={{width:"100vw"}}>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="/public/images/slider1.jpg" class="d-block w-100 banner-img" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="/public/images/slider2.jpg" class="d-block w-100 banner-img" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="/public/images/slider3.jpg" class="d-block w-100 banner-img" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

    </div>
  )
}

export default Slider
