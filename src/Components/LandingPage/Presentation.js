import img1 from "../../Images/dev12.jpg";
import img2 from "../../Images/dev10.jpg";
import img3 from "../../Images/dev8.jpg";
import React from "react";

const Presentation = () => {
    return <>
        <div className="row d-none d-lg-block" id="sentence"
            style={{backgroundColor: "#4a9bd1", height: "20rem", paddingTop: "2%", paddingBottom: "2%"}}>
            <div className="col-sm-12 d-flex flex-column justify-content-center align-items-center p-5 text-white font-weight-bold ">
                <q className="text-center display-4" style={{fontFamily: "Baskerville Old Face"}}>
                    TODAY IS THE DAY TO <br/> LEARN SOMETHING NEW !
                </q>
            </div>
        </div>

        <div className="row d-lg-none d-sm-flex py-5" style={{backgroundColor: "#4a9bd1"}}>
            <div className="col-sm-12 d-flex flex-column justify-content-center align-items-center text-white">
                <q className="text-center font-weight-bold">
                    TODAY IS THE DAY TO <br/> LEARN SOMETHING NEW !
                </q>
            </div>
        </div>

        <div className="row atouts">
            <div className="order-sm-12 col-md-6 px-0">
                <img className="img-fluid" src={img1} alt="img1" width="100%"/>
            </div>
            <div
                className="font-weight-bold order-sm-1 col-md-6 d-flex flex-column justify-content-center align-items-center text-dark" style={{backgroundColor: "#FFFFFF"}}>
                "When you start with a language, it is common to find
                a number of errors and problems.
                Learning to understand and resolve the mistakes
                independently, is an important part of learning." Grafikart
            </div>

            <div className="order-sm-12 col-md-6 px-0">
                <img className="img-fluid" src={img2} alt="img2" width="100%"/>
            </div>

            <div
            className=" font-weight-bold order-sm-12 col-md-6 d-flex flex-column justify-content-center align-items-center text-dark" style={{backgroundColor: "#FFFFFF"}}>
            "To write code, the KISS principle applies: Keep It Simple Stupid
            In programming, there are always plenty of ways to achieve the same result.
            So choose the easiest method.
            It will be easier to understand your code in the future and to maintain it because it is simpler."John Taieb

        </div>

            <div className="col-md-6 px-0">
                <img className="img-fluid" src={img3} alt="img3" width="100%"
                />
            </div>
            <div
                className=" font-weight-bold col-md-6 d-flex flex-column justify-content-center align-items-center text-dark" style={{backgroundColor: "#FFFFFF"}}>
            "Learning to code is anything but swallowing up a lot of theoretical lessons that you learn by heart.
            This is the wrong method. It is already super boring and eventually you won't be able to cope on your own in a new project. 
            Code cannot be learned by heart! Have fun inventing new features! Create things and if you find it fun, 
            then you're on the right track!" John Taieb
            </div>
        </div>
    </>;
};
export default Presentation;