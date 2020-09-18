import React, {useState, useEffect, useContext} from "react";
import {getProgramInfo} from "../../Services/ProgramsServices";
import ConnectedUserNav from "../../Layout/Nav/ConnectedUserNav";
import UserContext from "../Context/UserContext";
import WaveLoader from "../Utils/WaveLoader";
import ResourceFramework from "../ResourcesPage/ResourceFramework";

//affiche les ressources du framework
const FrameworkInfo = ({match}) => {
    const [ressources, setRessources] = useState();
    const {username} = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    const idFramework = match.params.id;

    useEffect(() => {
        getProgramInfo(idFramework)
            .then((res) => {
                const resourcesList = res.data.topic.ressources;
                setRessources(resourcesList);
                console.log(resourcesList);
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, [ idFramework]);

    return (
        <div style={{height:"100vh"}}>
            <ConnectedUserNav username={username} />
            <div className="card-deck mt-5">
                {loading ? (
                    <WaveLoader />
                ) : (
                    ressources.map((resource) => {
                        return (
                            <>
                                {/*
                                on affiche les ressources du framework individuellement
                                */}
                                <ResourceFramework key={resource['@id']} resource={resource} />
                            </>
                        );
                    })
                )}
            </div>
        </div>
    );
};
export default FrameworkInfo;

