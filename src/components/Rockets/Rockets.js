import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../../redux/rockets/rockets';
import './Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets } = useSelector((state) => state.rocketReducer);

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <div className="container">
      {
        rockets.map((rocket) => (
          <div key={rocket.id} className="d-flex rocket-item pt-4">
            <div>
              <img alt="rocket" src={rocket.images[0]} className="rocket-img" />
            </div>
            <div className="ml-3 font-w">
              <h4>{rocket.name}</h4>
              <p>{rocket.type}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Rockets;
