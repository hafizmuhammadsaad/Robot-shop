import React from 'react'
import Slider from '../../Components/Slider/Slider'
import { products } from '../../data'
import Products from '../../Components/Products/Products'





const Home = () => {
  return (
    <>
       <Slider/>
       

  
             <div className="container">
                    <h1 className="text-center mt-5 mb-5">Products</h1>
                    <div className="row">
                        {
                            products.map((p)=>(
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




export default Home
