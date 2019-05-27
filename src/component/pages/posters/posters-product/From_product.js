import React, { Component } from 'react';

class From_product extends Component {
    render() {
        return (
            <div>
                <form className="cart" action="" method="post" enctype="multipart/form-data">
                    <div className="quantity">
                        <label className="screen-reader-text" for="quantity_5ce75e6560224">Premium Quality quantity</label>
                        <input type="number" id="quantity_5ce75e6560224" className="input-text qty text" step="1" min="1" max="" name="quantity" value="1" title="Qty" size="4" inputmode="numeric" />
                    </div>
                    <button type="submit" name="add-to-cart" value="49" className="single_add_to_cart_button button alt">Add to cart</button>
                </form>
            </div>
        );
    }
}

export default From_product;
