import React, {useState, useEffect} from "react";
import {getProgramInfo} from "../../Services/ProgramsServices";
import {Circle} from "better-react-spinkit";
import Resource from "../ResourcesPage/Resource";

const FrameworkInfo = ({match}) => {
    const [ressources, setRessources] = useState();
    const token = localStorage.getItem('tokenUser');
    const config = {headers: {Authorization: "Bearer " + token}};
    const [loading, setLoading] = useState(true);
    const idFramework = match.params.id;

    useEffect(() => {
        getProgramInfo(idFramework, config)
            .then((res) => {
                const resourcesList = res.data.topic.ressources;
                setRessources(resourcesList);
                console.log(resourcesList);
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
                    ressources.map((resource) => {
                        return (
                            <>
                                <Resource key={resource['@id']} resource={resource} />
                            </>
                        );
                    })
                )}
            </div>
        </div>
    );
};
export default FrameworkInfo;

