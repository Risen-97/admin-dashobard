import React from "react";
import { latestOrders } from "../../data/orders";

const Orders = () => {
  return (
    <div className="dashboard__orders">
      <div className="latest__orders shadow">
        <h4>latest orders</h4>
        <div className="dashboard__header grid col-5">
          <span>order id</span>
          <span>user</span>
          <span>total price</span>
          <span>date</span>
          <span>status</span>
        </div>

        {latestOrders.map((order, i) => {
          return (
            <div key={i} className="grid col-5 table__row">
              <span>{order.id}</span>
              <span>{order.user}</span>
              <span>{order.price}</span>
              <span>{order.date}</span>
              <div className={`${order.status} status`}>{order.status}</div>
            </div>
          );
        })}

        {/* <p>View all</p> */}
        <button className="dashboard__view btn">View all</button>
      </div>
      <div className="top__customers shadow">
        <h4>top customers</h4>
        <div className="dashboard__header grid col-3">
          <span>user</span>
          <span>total orders</span>
          <span>total spending</span>
        </div>
        {latestOrders.map((order, i) => {
          return (
            <div key={i} className="top__customers--body grid col-3 table__row">
              <span>{order.user}</span>
              <span>{order.order}</span>
              <span>{order.total}</span>
            </div>
          );
        })}
        <button className="dashboard__view btn">View all</button>
      </div>
    </div>
  );
};

export default Orders;
