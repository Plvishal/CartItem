import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          img: '',
          id: 1,
        },
        {
          price: 999,
          title: 'Mobile Phone',
          qty: 10,
          img: '',
          id: 2,
        },
        {
          price: 999,
          title: 'Laptop',
          qty: 4,
          img: '',
          id: 3,
        },
      ],
    };
  }
  // first creates a function for product
  handleIncreaseQuantity = (product) => {
    console.log('Hey please incease the quantity of', product);
    // when increase the quantity of products take a array and  increase 1 in index of array
    const { products } = this.state;
    // here find the index of the  products in array
    const index = products.indexOf(product);
    // Here increase the the qauntity one
    products[index].qty += 1;
    // here  set the state of products
    this.setState({
      // here the both varible are same then we can simply write  as one products
      // products: products,
      products,
    });
  };
  handleDecreaseQuantity = (product) => {
    console.log('Hey please decrease the quantity of', product);

    const { products } = this.state;

    const index = products.indexOf(product);
    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;

    this.setState({
      // here the both varible are same then we can simply write  as one products
      // products: products,
      products,
    });
  };
  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQuantity={this.handleIncreaseQuantity}
              onDecreaseQuantity={this.handleDecreaseQuantity}
            />
          );
        })}
      </div>
    );
  }
}

export default Cart;
