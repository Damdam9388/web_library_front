import React from 'react';
import UpdateProgram from "./UpdateProgram";
import DeleteProgram from "./DeleteProgram";

const ProgramTable = ({program}) => {
    return (
        <>
            {console.log(program)}
            <tr>
                <th scope="row">{program.id}</th>
                <td>{program.programName}</td>
                <td><UpdateProgram program={program} /> </td>
                <td> <DeleteProgram program={program} /> </td>
            </tr>
        </>
    );
};

export default ProgramTable;