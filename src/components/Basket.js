import React, {Component} from 'react';
import {formatCurrency} from "../util";

class Basket extends Component {
    render() {
        const {cartItems} = this.props;
        return (
            <div className="alert alert-info">
                {cartItems.length===0 ? "Basket is empty":<div> You Have {cartItems.length} products in the basket</div>}
                {cartItems.length > 0 &&
                <div>
                    <ul>
                        {cartItems.map(item =>
                            <li>
                                <b> {item.title}</b>
                                X{item.count}
                                <button className="btn btn-danger"
                                        onClick={(e)=>this.props.handleRemoveFromCart(e,item)}
                                        >
                                    X
                                </button>
                            </li>

                        )
                        }
                    </ul>
                    Total: {formatCurrency(cartItems.reduce((a,c)=> a+c.price*c.count,0))}
                </div>
                }

            </div>
        );
    }
}

export default Basket;