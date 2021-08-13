import React from 'react'
import companyLogo from './image/favicon.png';
import '../../App';
function navbar({ onsetIsClicked_Btn }) {

    const click = () => {
        onsetIsClicked_Btn(1);
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container px-5">
                    <a className="navbar-brand  text-uppercase text-muted fw-bold" href="#">
                        <img src={companyLogo} alt="" width="30" height="24" className=" img-fluid d-inline-block align-text-top" />
                        react aap
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse m-auto" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto ">
                            <li className="nav-item ">
                                <a className="nav-link active fw-bold fs-4 text-uppercase text-muted" aria-current="page"
                                    href="#">Task 2</a>
                            </li>
                        </ul>
                        <button className="btn btn-outline-success" onClick={click}>Get Data</button>
                    </div>
                </div>
            </nav>
        </>
    )
};


export default navbar;