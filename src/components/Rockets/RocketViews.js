import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from '../../components/Rocket/Rocket';
import { cancelReservation, reserveRocket } from '../../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const { loading, rockets, error } = useSelector((state) => state.rocketsReducer);

  return (
    <div className="container">
      <div className="d-flex justify-content-center mt-5">
        <span className="mt-5 h3 font-weight-bold">Loading...</span>
      </div>
    </div>
  );
};

export default Rockets;
