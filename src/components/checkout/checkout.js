import React, { Component } from 'react';


class Checkout extends Component {
	renderCart() {
		// return this.cart.map((item, i) => {
		// 	return <div><p>servince from business 1:  $3000</p></div>
		// });
	}

	render(){
		return (
			<div>
				{ 'this.renderCart()' }
				<button>Checkout</button>
			</div>
		);
	}
}

export default Checkout;