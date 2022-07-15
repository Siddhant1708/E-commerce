import React, {useState, useEffect} from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./card";
import { getProducts } from "./helper/coreapicalls";


export default function Home() {
  
    const [products,setProducts] = useState([])
    const [error,seterror] = useState(false)

    const loadAllProduct = () => {
      getProducts().then(data => {
        if(data && data.error){
          seterror(data.error)
        } else {
          setProducts(data);
      }
      });
    }
  
    useEffect ( ()=> {
       loadAllProduct();
    },[] )

  return (
    <Base title="Home Page" description="Welcome to the Tshirt Store">
      <div className="row text-center">
       <h1 className="text-white">All of tshirts</h1>
       <div className="row">
         {products.map((product,index)=> {
           return (
             <div key={index} className="col-4 mb-4">
               <Card  product={product}/>
             </div>
           )
         } )}
       </div>
      </div>
    </Base>
  );
}
