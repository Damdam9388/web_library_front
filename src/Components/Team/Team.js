import React from 'react';
import './Team.scss'
import { Avatar } from "@chakra-ui/core";


const Team = () => {
    return(
        <>
                <div className="wrapper">
                    <h1>MEET THE TEAM</h1>
                    <div className="paragraph">
                        <p>This projet was developed as a part of House Of Code training.</p>
                    </div>

                    <div className="team">

                        <div className="team-member">

                            <div className="team-img">
                            <Avatar className= "img" src="https://bit.ly/broken-link" />
                            </div>
                            <h3>Damien</h3>
                            <p className="role">Web Developer</p>

                        </div>

                        <div className="team-member">

                            <div className="team-img">
                            <Avatar className= "img" src="https://bit.ly/broken-link" />
                            </div>
                            <h3>Safia</h3>
                            <p className="role">Web Developer</p>

                        </div>

                        <div className="team-member">

                            <div className="team-img">
                            <Avatar className= "img" src="https://bit.ly/broken-link" />
                            </div>
                            <h3>Maxime</h3>
                            <p className="role">Web Developer</p>

                        </div>

                    </div>
                </div>
                </>
        );
};
export default Team;
