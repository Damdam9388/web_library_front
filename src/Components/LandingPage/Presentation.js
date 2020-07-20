import img1 from "../../Images/img1.jpg";
import img2 from "../../Images/img2.jpg";
import img3 from "../../Images/img3.jpg";
import React from "react";

const Presentation = () => {
    return <>

        <div className="row d-none d-lg-block" id="sentence"
             style={{backgroundColor: "#FC8181", height: "20rem", paddingTop: "2%", paddingBottom: "2%"}}>
            <div className="col-sm-12 d-flex flex-column justify-content-center align-items-center p-5 text-white font-weight-bold ">
                <q className="text-center display-4" style={{fontFamily: "Baskerville Old Face"}}>
                    TODAY IS THE DAY TO <br/> LEARN SOMETHING NEW !
                </q>
            </div>
        </div>

        <div className="row d-lg-none d-sm-flex py-5" style={{backgroundColor: "#FC8181"}}>
            <div className="col-sm-12 d-flex flex-column justify-content-center align-items-center text-white">
                <q className="text-center font-weight-bold">
                    TODAY IS THE DAY TO <br/> LEARN SOMETHING NEW !
                </q>
            </div>
        </div>

        <div className="row atouts">
            <div className="col-md-6 px-0">
                <img className="img-fluid" src={img1} alt="img1" width="100%"/>
            </div>
            <div
                className="col-md-6 d-flex flex-column justify-content-center align-items-center text-white" style={{backgroundColor: "#263246"}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                A, accusamus assumenda blanditiis debitis dolorem eius,
                expedita facilis in ipsam itaque laborum natus officia
                quam quis soluta totam veritatis? Non, tenetur!
            </div>

            <div

                className="col-sm order-4 col-md-6 d-flex flex-column justify-content-center align-items-center bg-dark text-white">

                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam architecto excepturi facere hic, illo iure, molestiae
                necessitatibus non obcaecati officia pariatur placeat quas quo
                repellat repellendus saepe tempora ullam voluptates.
            </div>
            <div className="col-sm order-3 col-md-6 px-0">
                <img className="img-fluid" src={img2} alt="img2" width="100%"/>
            </div>

            <div className="col-md-6 px-0">
                <img className="img-fluid" src={img3} alt="img3" width="100%"
                />
            </div>
            <div
                className="col-md-6 d-flex flex-column justify-content-center align-items-center text-white" style={{backgroundColor: "#263246"}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                A, accusamus assumenda blanditiis debitis dolorem eius,
                expedita facilis in ipsam itaque laborum natus officia quam
                quis soluta totam veritatis? Non, tenetur!
            </div>
        </div>
    </>;
};
export default Presentation;