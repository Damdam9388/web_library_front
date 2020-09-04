import React, {useState, useEffect, useContext} from "react";
import {getProgramInfo} from "../../Services/ProgramsServices";
import Resource from "../ResourcesPage/Resource";
import Framework from "../FrameworkPage/Framework";
import UserContext from "../Context/UserContext";
import ConnectedUserNav from "../../Layout/Nav/ConnectedUserNav";
import WaveLoader from "../Utils/WaveLoader";

const ProgramInfo = ({match}) => {
    const [resources, setResources] = useState();
    const [frameworks, setFramework] = useState();
    const [loading, setLoading] = useState(true);
    const idProgram = match.params.id;
    const {username} = useContext(UserContext);

    useEffect(() => {
        getProgramInfo(idProgram)
            .then((res) => {
                const resourcesList = res.data.ressources;
                const frameworkList = res.data.frameworks;
                console.log(res);
                setResources(resourcesList);
                setFramework(frameworkList);
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, [ idProgram]);

    
    const DisplayFramework = () => {
        return frameworks.map((framework) => {
            return (
                <Framework key ={framework['@id']} framework={framework} />
            );
        })
    }

    const DisplayResource = () => {
        return resources.map((resource) => {
            return (
                <Resource  key={resource['@id']} resource={resource} />
            );
        })
    }

    return (
        <div style={{height:"200vh"}}>

            <ConnectedUserNav username={username} />
            
            <div className="card-deck" style={{marginTop:"20px"}}>

                {loading ? (
                    <WaveLoader />
                ) : (
                    <>
                        {<DisplayFramework />}
                        {<DisplayResource />}
                    </>
                )}
            </div>
        </div>
    );
};
export default ProgramInfo;