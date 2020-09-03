import React from 'react';
import {Wave} from "better-react-spinkit";

const WaveLoader = () => {
    return (
        <div style={{minHeight:"100vh"}} className="col-md-12 d-flex flex-column justify-content-center align-items-center">
            <Wave size={100} color={"#00acee"} />
        </div>
    );
};

export default WaveLoader;