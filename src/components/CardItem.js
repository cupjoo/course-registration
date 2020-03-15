import React from 'react'
import "./CardItem.css";

const imgPath = process.env.PUBLIC_URL + '/assets/images/';

const CardItem = ({ item, btn }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-30px card-group">
      <div className="card">
        <div>
          <img className="img-fluid lazyimg" src={`${imgPath}${item.img}`} alt={item.img} />
        </div>
        <div className="card-body">
          <h2 className="card-title">{item.title}</h2>
          <h4 className="card-text">{item.startDate} ~ {item.endDate}</h4>
        </div>
        <div className="card-footer bg-white">
          Created by <span className="lecturer">{item.lecturer}</span>
        </div>
        {btn}
      </div>
    </div>
  );
};

export default CardItem
