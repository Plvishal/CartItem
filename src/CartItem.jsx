import React from 'react';

class CartItem extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     price: 999,
  //     title: 'Mobile Phone',
  //     qty: 1,
  //     img: '',
  //   };
  //   // this.increaseQuantity = this.increaseQuantity.bind(this);
  //   this.testing();
  // }

  // start using promises
  // testing() {
  //   const promise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve('Done');
  //     }, 5000);
  //   });
  //   promise.then(() => {
  //     // setState acts like a synchronous call
  //     this.setState({ qty: 100 });
  //     console.log('state', this.state);
  //   });
  // }
  // End using promises

  // increaseQuantity = () => {
  //   // console.log('this', this.state);

  //   // //   form one to setState
  //   // this.setState({
  //   //   qty: this.state.qty + 1,
  //   // });

  //   // form  two to setState writing
  //   this.setState(
  //     (prevState) => {
  //       return {
  //         qty: prevState.qty + 1,
  //       };
  //     },
  //     //  this is a second callback function and current state where quantity increased
  //     () => {
  //       console.log('this.state', this.state);
  //     }
  //   );
  // };
  // decreaseQuantity = () => {
  //   console.log('this', this.state);
  //   const { qty } = this.state;
  //   if (qty === 0) {
  //     return;
  //   }
  //   this.setState((prevState) => {
  //     return {
  //       qty: prevState.qty - 1,
  //     };
  //   });
  // };
  render() {
    console.log('this.props', this.props);
    const { price, title, qty } = this.props.product;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} alt="" />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: '#777' }}>Rs {price} </div>
          <div style={{ color: '#777' }}>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://as2.ftcdn.net/v2/jpg/01/07/62/07/1000_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg"
              onClick={() => this.props.onIncreaseQuantity(this.props.product)}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://as2.ftcdn.net/v2/jpg/02/78/84/57/1000_F_278845758_9xl3srVgd8p4jquxgxugGaHV1e5EOlLO.jpg"
              onClick={() => this.props.onDecreaseQuantity(this.props.product)}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://as1.ftcdn.net/v2/jpg/03/40/32/90/1000_F_340329038_j7H8dA1F0vdbw4ltVYNdZe7b8zv1KWLu.jpg"
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc',
  },
};

export default CartItem;
