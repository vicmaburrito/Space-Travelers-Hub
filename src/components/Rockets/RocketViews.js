import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from './Rocket';
import { cancelReservation, reserveRocket } from '../../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const { loading, rockets, error } = useSelector((state) => state.rocketsReducer);

  const onReserveRocket = (id) => {
    dispatch(reserveRocket(id));
  };

  const onCancelReservation = (id) => {
    dispatch(cancelReservation(id));
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-center mt-5">
        {error && <span className="mt-5 h3 font-weight-bold">{error}</span>}
        <span className="mt-5 h3 font-weight-bold">Loading...</span>
      </div>
      <Rocket
        reserveRocket={onReserveRocket}
        cancelReservation={onCancelReservation}
      />
    </div>
  );
};

export default Rockets;
