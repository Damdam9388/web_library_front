import React from "react";

//composant qui regroupe les titres de la table des items
//pour que l'admin puisse s'y retrouver dans la gestion des items
const TitlesTable = () => {
    return (
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">Description</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
        </tr>
        </thead>
    );
};
export default TitlesTable;