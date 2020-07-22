import React, {useState, useEffect} from "react";
import {getPrograms} from "../../Services/ProgramsServices";
import Program from "./Program";
import {Circle} from "better-react-spinkit";

const Programs = () => {
    const [programs, setPrograms] = useState();
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('tokenUser');
    const config = {headers: {Authorization: "Bearer " + token}};

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
            <div className="card-deck">
                {loading ? (
                    <Circle />
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