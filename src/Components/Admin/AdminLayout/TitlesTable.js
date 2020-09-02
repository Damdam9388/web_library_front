import React from "react";

//composant qui regroupe les titres de la table des items
//pour que l'admin puisse s'y retrouver dans la gestion des items
const TitlesTable = ({titles}) => {
    return (

        <thead>
            <tr>
                {titles ? titles.map((title, index) =>
                        <th scope="col" key={index}>{title}</th>
                    )
                    : <th scope="col"/>
                }
            </tr>
        </thead>
    );
};
export default TitlesTable;