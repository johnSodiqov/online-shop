import React, { useEffect, useState, } from 'react';
// import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import productData from '../productData.jsx';
import "../homePage/homePage.css"
import intro_img from "../homePage/img/intro-img1.png"


const HomePage = () => {
    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        productData.getData()
            .then(response => {
                setProducts(response)
            }).catch(error => {
                console.log(error)
            })
    }, [])

    function favourite() {
        console.log("Some features is coming")
    }

    function cartItemCollector(object) {
        let clone = [...cartItems]
        let result = []

        if (clone.length === 0) {
            clone.push({
                name: object.name,
                image: object.image,
                cost: object.cost,
                count: 1,
                id: object.id

            })

        } else {
            clone.map((item, index) => {
                if (item.id === object.id) {
                    item.count++
                } else {
                    if (result.length === 0) {
                        result.push({
                            name: object.name,
                            image: object.image,
                            cost: object.cost,
                            count: 1,
                            id: object.id
                        })
                        clone.push(result[0])
                        console.log("Second Time")
                    }


                }
            })

        }

        setCartItems(clone)

        console.log(clone)
    }
    return (
        <div className='container-fluid pt-3'>



            <div className="intro">
                <div className="intro-text">
                    <h1>Aksesuar Iphone 13 pro max</h1>
                </div>
                <div className="intro-image">
                    <img src={intro_img} alt="iphone-15" />
                </div>
            </div>

            <div className="products">
                {
                    products.map((item, index) => {
                        return (
                            <div key={index} className="product-card" >
                                <img src={item.image} className="product-card-img" alt={item.name} />
                                <div className="product-card-body">
                                    <h4 >{item.name}</h4>
                                    <p>&#11088; {item.rating}</p>
                                    <h5>$ {item.cost}</h5>
                                    <button className='button' onClick={() => cartItemCollector(item)}>Add to cart</button>
                                </div>
                                <div className="favourite-button" onClick={favourite}>
                                    {
                                        (item.isFavourite) ? <AiFillHeart /> : <AiOutlineHeart />

                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default HomePage;
