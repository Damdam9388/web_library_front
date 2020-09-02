import React from 'react';

const TitlePage = ({title}) => {
    return (
        <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
            <h2 className="my-5">{title}</h2>
        </div>
    );
};

export default TitlePage;