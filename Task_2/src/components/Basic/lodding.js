import React from 'react'

 const lodding = () => {
    return (
        <>
            <div className="d-flex align-items-center spinner-box">
                <strong>Loading...</strong>
                <div className="spinner-border text-warning ms-auto" role="status" aria-hidden="true"></div>
            </div>
        </>
    )
}

export default lodding;