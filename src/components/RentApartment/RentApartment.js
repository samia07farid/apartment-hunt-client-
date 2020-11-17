import React, { useState } from 'react';
import rentInfo from '../../fakedata/rentInfo';
import Apartment from '../Apartment/Apartment';
import './RentAparment.css'

const RentApartment = () => {
    const [rent, setRent] = useState(rentInfo);

    return (
        <div className="background">
            <h5 className="h5">House rent</h5>
            <div className="h2">
                <h2>Discover the latest Rent available today</h2>
            </div>
            <div className="d-flex  justify-content-center ">
                <div className="container-md  row mt-3 mb-5 ml-3 pt-3">
                    {
                        rent.map(details => <Apartment
                            details={details}
                            key={details.key}
                        ></Apartment>)
                    }
                </div>
            </div>
        </div>
    );
};

export default RentApartment;