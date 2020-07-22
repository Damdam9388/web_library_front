import React, {useState, useEffect} from "react";
import {getResources} from "../../Services/ProgramsServices";
import {Circle} from "better-react-spinkit";
import Resource from "../ResourcesPage/Resource";

const ProgramResources = ({match}) => {
    const [resources, setResources] = useState();
    const token = localStorage.getItem('tokenUser');
    const config = {headers: {Authorization: "Bearer " + token}};
    const [loading, setLoading] = useState(true);
    const idTopicProgram = match.params.id;

    useEffect(() => {
        getResources(idTopicProgram, config)
            .then((res) => {
                const resourcesList = res.data["hydra:member"];
                setResources(resourcesList);
                console.log(resourcesList);
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, [config, idTopicProgram]);

    return (
        <div style={{height:"100vh"}}>
            <div className="card-deck">
                {loading ? (
                    <Circle />
                ) : (
                    resources.map((resource, index) => {
                        return (
                            <Resource key={index} resource={resource} />
                        );
                    })
                )}
            </div>
        </div>
    );
};
export default ProgramResources;