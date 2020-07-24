import React, {useState, useEffect} from "react";
import {getProgramInfo} from "../../Services/ProgramsServices";
import {Circle} from "better-react-spinkit";
import Resource from "../ResourcesPage/Resource";
import Framework from "../ResourcesPage/Framework";

const ProgramInfo = ({match}) => {
    const [resources, setResources] = useState();
    const [frameworks, setFramework] = useState();
    const token = localStorage.getItem('tokenUser');
    const config = {headers: {Authorization: "Bearer " + token}};
    const [loading, setLoading] = useState(true);
    const idProgram = match.params.id;

    useEffect(() => {
        getProgramInfo(idProgram, config)
            .then((res) => {
                const resourcesList = res.data.topic.ressources;
                const frameworkList = res.data.frameworks;
                setResources(resourcesList);
                setFramework(frameworkList);
                console.log("les resources :",resourcesList);
                console.log("les frameworks :",frameworkList);
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
                    frameworks.map((framework) => {
                        return (
                            <div className="col-md-12">
                                <Framework key ={framework['@id']} framework={framework} />
                            </div>
                        );
                    })
                )};
                {loading ? (
                    <Circle />
                ) : (
                    resources.map((resource) => {
                        return (
                            <div className="col-md-12">
                                <Resource  key={resource['@id']} resource={resource} />
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};
export default ProgramInfo;