import React from 'react';
import "../cartPage/cartPage.css"


const CartPage = () => {


    return (
        <div className='cart'>

            <div className="cart-header">
                <h1>Cart</h1>
                <i className="bi bi-cart3"></i>
            </div>

            <div className="cart-list">

                <div className="cart-item">

                    <div className="cart-img">
                        <img src="https://vistapointe.net/images/product-wallpaper-8.jpg" alt="" />
                    </div>

                    <div className="cart-info-container">
                        <h2 className='item-title'>Cart title</h2>
                        <div className="item-option">
                            <i className="bi bi-trash"></i>
                            <button>Remove</button>
                        </div>
                        <div className="item-amount">
                            <button>--</button>
                            <h5>1</h5>
                            <button>+</button>
                        </div>
                        <div className="item-price">
                            <h3>99 000 sum</h3>
                        </div>
                    </div>
                </div>

                
            </div>

            <div className="item-total-price">
                <h1>Total price: 100$</h1>
            </div>

        </div>
    );
}

export default CartPage;
