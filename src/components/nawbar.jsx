import { useEffect, useState } from "react";
import axios from 'axios';
import Header from "./header";



function Nawbar() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const param = {

    }


    const product = await axios({

      method: "get",
      url: `https://api.themoviedb.org/3/search/movie?api_key=3cc05ada7e70628b8d1bf36e4d1f6fd7&language=ru-RU&query=${search}&page=1&include_adult=false`,

    });
    console.log('products', product);
    if (product.status == 200) {
      setProducts(product.data.results);
    }
    else {
      console.log("error", product);
    }
  }


  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid con">
          <a class="navbar-brand text-white " href="/">Кино</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item text-white" href="#">Action</a></li>
                  <li><a class="dropdown-item text-white" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider text-white" /></li>
                  <li><a class="dropdown-item text-white" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled text-white">Disabled</a>
              </li>
            </ul>
            <div>
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearch(e.target.value)} />
            </div>
            <button class="btn btn-outline-success text-white" onClick={fetchProducts}>Search</button>

          </div>
        </div>
      </nav>

      {products.length > 0 && search != "" ?
        <div className="row">

          {products.map((item) =>

            <>
              <div className="col-3 ">
                <div className="card bg-dark text-center">
                  <img width="100%" height="300px" src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + item.poster_path} />
                  <h6><a className='hreff text-white' href={"/detail/" + item.id}>{item.title} смотреть </a> </h6>
                </div><br></br>
              </div>


            </>



          )

          }

        </div>
        : <></>
      }


    </div>


  );
}
export default Nawbar;
