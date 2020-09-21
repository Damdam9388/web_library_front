import React, {useState, useEffect, useContext} from "react";
import {getProgramInfo} from "../../Services/ProgramsServices";
import Resource from "../ResourcesPage/Resource";
import UserContext from "../Context/UserContext";
import ConnectedUserNav from "../../Layout/Nav/ConnectedUserNav";
import WaveLoader from "../Utils/WaveLoader";
import FrameworkLi from "./FrameworkLi";
import * as CONSTANTS from "../../Constants/constants";
import {Link} from "react-router-dom";

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
                setResources(resourcesList);
                setFramework(frameworkList);
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, [ idProgram]);


    const DisplayResource = () => {
        return resources.map((resource) => {
            return (
                <Resource  key={resource['@id']} resource={resource} />
            );
        })
    }

    return (
        <>
            <ConnectedUserNav username={username} />
            <div style={{minHeight:"100vh"}} className="d-flex">

                    {loading ? (
                        <WaveLoader />
                    ) : (
                        <>
                            <div className="col-md-2 align-self-stretch m-0" style={{height:"100vh", background:"linear-gradient(to right, #457fca, #5691c8)"}}>
                                <ul className="text-center" style={{padding:"0"}}>

                                    <h4 className="text-white my-5">frameworks</h4>
                                    {
                                        frameworks ? frameworks.map(framework =>
                                                <FrameworkLi url={`${CONSTANTS.FRAMEWORK_SINGLE}${framework['@id']}`} name={framework.frameworkName}/>
                                            )
                                            :
                                            <></>
                                    }
                                </ul>

                            </div>
                            <div className= "col-md-10">
                                <div className="row">
                                    <div className="col-md-12">
                                        <Link
                                            className="btn btn-primary my-5 border-0 float-right"
                                              style={{background:"linear-gradient(to right, #457fca, #5691c8)"}}
                                            to={`${CONSTANTS.ADD_RESOURCE_PROGRAM}`}>
                                            Add resource
                                        </Link>
                                    </div>
                                </div>
                                <div className="card-deck" style={{marginTop:"20px"}}>
                                    <DisplayResource />
                                </div>
                            </div>
                        </>
                    )}

            </div>
        </>

    );
};
export default ProgramInfo;