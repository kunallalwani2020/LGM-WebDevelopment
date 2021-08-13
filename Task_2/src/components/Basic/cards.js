import React from 'react';
import gmailImg from './image/gmail.png';
function cards({ email, first_name, last_name, avatar }) {
    return (
        <>
            <div className="col-5 m-4">
                <div className="card flex-row">
                    <div className="phonebtn">
                        <i className="fas fa-phone-alt"></i>
                    </div>
                    <img src={avatar} className="card-img-top" />
                    <div className="card-body ps-1">
                        <h5 className="card-title fs-3 text-uppercase fw-bolder">{first_name + " " + last_name} </h5>
                        <p className="card-text fw-bolder fs-5 text-muted">
                            <img src={gmailImg} className="rounded"
                                alt="email img" /> {email}
                        </p>
                        <div className="socialMedia-links ">
                            <i className="social-link fab fa-twitter ms-0"></i>
                            <i className="fab fa-linkedin-in"></i>
                            <i className="social-link fab fa-facebook-f"></i>
                            <i className="social-link fab fa-google"></i>

                        </div>
                        <a href="#" className="btn btn-primary fw-bolder">Read More</a>
                    </div>
                </div>
            </div>
        </>
    )

};

export default cards;
