import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Nawbar from '../components/nawbar';
import { useParams } from 'react-router-dom';
import Header from '../components/header';

function Detail() {
    const [detail, setDetail] = useState(null);
    const [similar, setSimilar] = useState([]);
    const [video, setVideo] = useState([]);

    let params = useParams();
    let movie_id = params.id;
    const fetchProducts = async () => {

        const product = await axios({

            method: "get",
            url: `https://api.themoviedb.org/3/movie/${movie_id}?api_key=3cc05ada7e70628b8d1bf36e4d1f6fd7&language=ru-RU`
            ,

        });

        console.log('products', product);
        if (product.status == 200) {
            setDetail(product.data);
        }
        else {
            console.log("error", product);
        }
    }


    const Similar = async () => {

        const product = await axios({

            method: "get",
            url: ` https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=3cc05ada7e70628b8d1bf36e4d1f6fd7&language=ru-RU&page=1`,

        });

        console.log('products', product);
        if (product.status == 200) {
            setSimilar(product.data.results);
        }
        else {
            console.log("error", product);
        }
    };

    const Video = async () => {

        const product = await axios({

            method: "get",
            url: ` https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=3cc05ada7e70628b8d1bf36e4d1f6fd7&language=ru-RU`,

        });

        console.log('video', product);
        if (product.status == 200) {
            setVideo(product.data.results);
        }
        else {
            console.log("error", product);
        }
    }

    useEffect(() => {
        fetchProducts();
        Similar();
        Video();

    }, [])


    return (

        <div>
            <Nawbar />
            <Header />
            <div className='container'>
                <div className="row">



                    <div className='col-8'>
                        {detail != null ?
                            <>


                                <div className='row'>


                                    <div className='col-6 mt-2'>
                                        <img width="100%" height="500px" src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + detail.poster_path} />
                                    </div>
                                    <div className='col-6'>
                                        <h1>{detail.title}</h1>
                                        <h4>{detail.overview}</h4>
                                        <br></br>
                                        <br></br>

                                        <p>{detail.popularity}</p>
                                        <p>Дата выхода{detail.release_date}</p>
                                    </div>
                                    <div className='col-12 mt-4'>
                                        {video.length > 0 ?
                                            <>
                                                <></>
                                                {video.map((item) =>
                                                    <>
                                                        <iframe src={'https://youtube.com/embed/' + item.key} width="100%" height={300}></iframe>
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


                            </>
                            :
                            <>
                            </>
                        }
                    </div>
                    <div className='col-4 text-center'>
                        <h3>Похожие фильмы</h3>

                        {similar.length > 0 ?
                            <>
                                <></>
                                {similar.map((item) =>
                                    <>
                                        <img width="100%" height="300px" src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + item.poster_path} />

                                        <h5><a className='hreff' href={"/detail/" + item.id}>{item.title}</a> </h5>








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
            </div>
        </div>


    );
}
export default Detail;