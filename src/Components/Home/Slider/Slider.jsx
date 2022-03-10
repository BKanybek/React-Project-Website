import React, { useContext, useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import Item from './Item';
// import '../Slider/Styles.css'
import { productContext } from '../../../Contexts/ProductsContext';
import { Link, useSearchParams } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];



const Slider = () => {
    const { products, getProducts } = useContext(productContext)
    const [searchParams, setSearchParams] = useSearchParams()
    const [limit, setLimit] = useState(6)
    const [page, setPage] = useState(searchParams.get('_page') ? searchParams.get("_page") : 1)


    useEffect(() =>{
        setSearchParams({
            '_limit': limit,
            "_page": page
        })
    }, [limit, page])


    useEffect(() => {
        getProducts()
    }, [])
    return (
      <>
        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', paddingTop: '110vh', flexWrap: 'wrap' }}>
          <h1 style={{padding: '0 15px'}}>Часы Rolex</h1>
          <Link style={{textDecoration: 'none', color: 'black'}} to='/list'>
            <h2 >Посмотреть все</h2>
          </Link>
        </div>
            <div className='Slider' >
              <Carousel breakPoints={breakPoints} >
                  {
                    products ? (
                      products.map((item, index) => (
                        <Item  key={index} sx={{height: '800px'}}> 
                          <Card sx={{ maxWidth: 306, boxShadow: 'none'}}>
                            <Link to={`/detail/${item.id}`} style={{textDecoration: 'none', color: 'black'}}> 
                              <CardMedia
                                // sx={{width: '300px'}}
                                component="img"
                                image={item.image}
                                alt={item.title}
                                sx={{paddingTop: '100px'}}
                              />
                              <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                  {item.title}
                                </Typography>
        
                              </CardContent>
                              <CardContent>
                                <Typography >
                                    ${item.price}
                                </Typography>
                              </CardContent>
                            </Link>
                        </Card>
                        </Item>
                    ))
                  ): (<h1>Loading...</h1>)
                }
              </Carousel>
            </div>
      </>
    );
};

export default Slider;