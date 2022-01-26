import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../../redux/rockets/rockets';
import './Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const { loading, rockets } = useSelector((state) => state.rocketReducer);

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <div className="container">
      {loading ? (
        <div className="d-flex justify-content-center mt-5">
          <span className="mt-5 h3 font-weight-bold">Loading...</span>
        </div>
      ) : (
        rockets.map((rocket) => (
          <div key={rocket.id} className="d-flex rocket-item pt-4">
            <div>
              <img alt="rocket" src={rocket.images[0]} className="rocket-img" />
            </div>
            <div className="info-section ml-3 font-w">
              <h4>{rocket.name}</h4>
              <span>{rocket.desc}</span>
              <div className="mt-4">
                <button type="submit" className="btn btn-primary">Reserve Rocket</button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Rockets;
