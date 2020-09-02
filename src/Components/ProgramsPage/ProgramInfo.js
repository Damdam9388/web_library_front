import React, {useState, useEffect, useContext} from "react";
import {getProgramInfo} from "../../Services/ProgramsServices";
import {Wave} from "better-react-spinkit";
import Resource from "../ResourcesPage/Resource";
import Framework from "../FrameworkPage/Framework";
import UserContext from "../Context/UserContext";
import ConnectedUserNav from "../../Layout/Nav/ConnectedUserNav";

const ProgramInfo = ({match}) => {
    const [resources, setResources] = useState();
    const [frameworks, setFramework] = useState();
    const [loading, setLoading] = useState(true);
    const idProgram = match.params.id;
    const {username} = useContext(UserContext);

    useEffect(() => {
        const token = localStorage.getItem('tokenUser');
        getProgramInfo(idProgram, {headers: {Authorization: "Bearer " + token}})
            .then((res) => {
                const resourcesList = res.data.topic.ressources;
                const frameworkList = res.data.frameworks;
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
                    <div style={{minHeight:"100vh"}} className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                        <Wave size={100} color={"#00acee"} />
                    </div>
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