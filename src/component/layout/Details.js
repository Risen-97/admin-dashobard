import React from "react";
import Chart from "./Chart";
import { salesDetails } from "../../data/orders";
const Details = () => {
  return (
    <div className="dashboard__details flex gap-30">
      <Chart />
      <div className="details__data grid col-2">
        {salesDetails.map((detail, i) => {
          return (
            <div
              key={i}
              className="shadow flex item-center  space-around table__row"
            >
              <ion-icon name={detail.icon}></ion-icon>
              <div className="flex flex-column ">
                <span className="details__number">{detail.number}</span>
                <p>{detail.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Details;
