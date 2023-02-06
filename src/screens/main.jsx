import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Nawbar from '../components/nawbar';
import Header from '../components/header';


function Main() {
    const [main, setMain] = useState([]);
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        const param={

        }
        

        const product = await axios({

            method: "get",
            url: "https://api.themoviedb.org/3/movie/popular?api_key=3cc05ada7e70628b8d1bf36e4d1f6fd7&language=ru-RU",

        });
        console.log('products', product);
        if (product.status == 200) {
            setProducts(product.data.results);
        }
        else {
            console.log("error", product);
        }
    }
        useEffect(()=>{
            fetchProducts();
        },[])

    
    return (

        <div>
            <Nawbar/>
            <Header/>
            
            <div className="row">
                {products.length > 0 ?
                    <>
                        {products.map((item) =>
                            <>
                            
                            <div className='col-3'>
                            <div className="card bg-dark text-white text-center">                                                                                                
                                <img  width="100%" height="300px" src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"+item.poster_path} /> 
                               <h5><a className='href'  href={"/detail/"+item.id}>{item.title}</a> </h5>
                                <p>{item.popularity}</p>                          
                                <h6>{item.release_date}</h6>
                                
                                </div><br></br>
                                </div>



                            </>
                        )
                        }


                    </>
                    :
                    <>
                    </>
                }
            </div>
        </div>

    );
}
export default Main;