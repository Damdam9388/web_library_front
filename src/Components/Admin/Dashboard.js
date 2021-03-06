import React, { useContext } from "react";
import ConnectedUserNav from "../../Layout/Nav/ConnectedUserNav";
import UserContext from "../Context/UserContext";
import { Link } from "react-router-dom";
import {
  ADMIN_PROGRAMS,
  ADMIN_RESOURCES,
  ADMIN_USERS,
} from "../../Constants/constants";
import { Button } from "@chakra-ui/core";
import { MdBuild } from "react-icons/md";

const Dashboard = () => {
  const { username } = useContext(UserContext);

  return (
    <div className="wrap" style={{ height: "100vh" }}>
      <ConnectedUserNav username={username} />

      <div className="col-sm-12 d-flex flex-column justify-content-center align-items-center">
        <h2 className="text-uppercase text-center">Welcome back dear Admin !</h2>
        <ul style={{ listStyle: "none", paddingInlineStart:"0px", textAlign:"center"}}>
          <li className="mt-3">
            <Button leftIcon={MdBuild} variantColor="blue" variant="outline">
              <Link to={ADMIN_USERS}>Users list</Link>
            </Button>
          </li>
          <li className="mt-3">
            <Button leftIcon={MdBuild} variantColor="blue" variant="outline">
              <Link to={ADMIN_PROGRAMS}>Programs list</Link>
            </Button>
          </li>
          <li className="mt-3">
            <Button leftIcon={MdBuild} variantColor="blue" variant="outline">
              <Link to={ADMIN_RESOURCES}>Resources list</Link>
            </Button>
          </li>
        </ul>
      </div>

    </div>
  );
};
export default Dashboard;
