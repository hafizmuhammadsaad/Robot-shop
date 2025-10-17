import React from 'react'
import { products2 } from '../../data'
import Products from '../../Components/Products/Products'
const Product = () => {
  return (
    <>
    
    <div className="container">
                    <h1 className="text-center mt-5 mb-5">Our Products</h1>

      <div className="row">
        {
          products2.map((p)=>(
            <div className="col-lg-3 col-sm-6 col-12">
              <Products  {...p}/>
            </div>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default Product
