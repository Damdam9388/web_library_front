import React, {useContext} from 'react';
import ConnectedUserNav from "../../Layout/Nav/ConnectedUserNav";
import UserContext from "../Context/UserContext";
import {Link} from 'react-router-dom';
import {ADMIN_PROGRAMS, ADMIN_RESOURCES, ADMIN_USERS} from "../../Constants/constants";

const Dashboard = () => {

    const {username} = useContext(UserContext);

    return (
        <div className="wrap" style={{height:"100vh"}}>

            <ConnectedUserNav username={username} />
            <h2 className="text-uppercase">Welcome back dear Admin !.</h2>
            <ul>
                <li><Link to={ADMIN_USERS}>users list</Link></li>
                <li><Link to={ADMIN_PROGRAMS}>programs list</Link></li>
                <li><Link to={ADMIN_RESOURCES}>resources list</Link></li>
            </ul>

        </div>

    );
};
export default Dashboard;