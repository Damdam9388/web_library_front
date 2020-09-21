import React, {useState, useEffect, useContext} from "react";
import {getProgramInfo} from "../../Services/ProgramsServices";
import ConnectedUserNav from "../../Layout/Nav/ConnectedUserNav";
import UserContext from "../Context/UserContext";
import WaveLoader from "../Utils/WaveLoader";
import FrameworkLi from "../ProgramsPage/FrameworkLi";
import * as CONSTANTS from "../../Constants/constants";
import {Link} from "react-router-dom";
import Resource from "../ResourcesPage/Resource";


//affiche les ressources du framework
const FrameworkInfo = ({match}) => {
    const [resources, setResources] = useState();
    const [frameworks, setFramework] = useState();
    const {username} = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    const idFramework = match.params.id;

    useEffect(() => {
        getProgramInfo(idFramework)
            .then((res) => {
                const resourcesList = res.data.topic.ressources;
                setResources(resourcesList);
                console.log(resourcesList);
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, [ idFramework]);


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
                            <div className="col-md-2 align-self-stretch m-0" style={{minHeight:"100vh", background:"linear-gradient(to right, #457fca, #5691c8)"}}>
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
                                            to={`${CONSTANTS.ADD_RESOURCE_FRAMEWORK}`}>
                                            Add resource
                                        </Link>
                                    </div>
                                </div>
                                    <div className="row d-flex justify-content-center">
                                            <DisplayResource />

                                    </div>



                            </div>
                        </>
                    )}

            </div>
        </>

    );
};
export default FrameworkInfo;

