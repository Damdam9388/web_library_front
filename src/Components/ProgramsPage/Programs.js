import React, {useState, useEffect, useContext} from "react";
import {getPrograms} from "../../Services/ProgramsServices";
import Program from "./Program";
import {Wave} from "better-react-spinkit";
import UserContext from "../Context/UserContext";
import ConnectedUserNav from "../../Layout/Nav/ConnectedUserNav";

const Programs = () => {
    const [programs, setPrograms] = useState();
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('tokenUser');
    const config = {headers: {Authorization: "Bearer " + token}};
    const {username} = useContext(UserContext);

    useEffect(() => {
        getPrograms(config)
            .then((res) => {
                const programsList = res.data["hydra:member"];
                setPrograms(programsList);
                console.log(programsList);
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div style={{height:"100vh"}}>

            <ConnectedUserNav username={username} />
            <div className="card-deck">
                    {loading ? (
                            <div style={{minHeight:"100vh"}} className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                                <Wave size={100} color={"#00acee"} />
                            </div>

                    ) : (
                        programs.map((program, index) => {
                            return (

                                    <Program key={index} program={program} />

                            );
                        })
                    )}
            </div>
        </div>
    );
};

export default Programs;