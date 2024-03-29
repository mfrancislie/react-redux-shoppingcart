import { connect } from 'react-redux';
import React, { Component } from 'react';
import { fetchOrders } from '../action/orderActions';
import formatCurrency from '../util';

class Orders extends Component {
  componentDidMount() {
    this.props.fetchOrders();
  }

  render() {
    const { orders } = this.props;
    return (
      <div>
        {!orders ? (
          <div>Loading...</div>
        ) : (
          <div className="orders">
            <h2>Orders</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>DATE</th>
                  <th>TOTAL</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>ADDRESS</th>
                  <th>ITEMS</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr>
                    <td>{order._id}</td>
                    <td>{order.createdAt}</td>
                    <td> {formatCurrency(order.total)}</td>
                    <td>{order.name}</td>
                    <td>{order.email}</td>
                    <td>{order.address}</td>
                    <td>
                      {order.cartItems.map((item) => (
                        <div>
                          {item.count} {' x '} {item.title}
                        </div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    orders: state.order.orders,
  }),
  {
    fetchOrders,
  }
)(Orders);
