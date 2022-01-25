import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets } = useSelector((state) => state.rocketReducer);

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <div className="h2 d-flex justify-content-center">
      {
        rockets.map((rocket) => (
          <div key={rocket.id}>
            <p>{rocket.name}</p>
          </div>
        ))
      }
    </div>
  );
};

export default Rockets;
