import React from "react";
import Fade from 'react-reveal/Fade';
import "../../Layout/Nav/Nav.scss";
import firstImage from "../../Images/screen-post-LJUaTzKtFNc-unsplash.jpg";
import learning1 from "../../Images/learning1.jpg";
import learning2 from "../../Images/success.jpeg";
import learning3 from "../../Images/world.jpg";
import * as CONSTANTS from "../../Constants/constants";

const FirstLook = () => {

    return (
        <>
            <div className="row p-0" style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),url('${firstImage}')`, backgroundRepeat:"no-repeat", minHeight:"92vh"}}>
                <div className="col-md-12 d-flex flex-column justify-content-center align-items-center text-white font-weight-bold">
                    <Fade left>
                    <h1 className="d-none d-lg-inline-flex">TODAY IS THE DAY TO LEARN SOMETHING NEW !</h1>
                        <div className="btn-group d-inline mt-5">
                            <a className="nav-link  btn btn-outline btn-lg mb1 silver font-weight-bold d-inline mx-4" href={CONSTANTS.LOGIN}>LOGIN</a>
                            <a className="nav-link  btn btn-outline btn-lg mb1 silver font-weight-bold d-inline mx-4" href={CONSTANTS.SIGNUP}>SIGN UP</a>
                        </div>
                    </Fade>
                </div>
            </div>

            <section>
                <div id="row_images" className="row pb-3" style={{minHeight:"50rem", backgroundColor:"#f5f5f5"}}>

                    <div className="col-md-12 title-wave px-0" style={{height:"1rem"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,288L80,261.3C160,235,320,181,480,160C640,139,800,149,960,128C1120,107,1280,53,1360,26.7L1440,0L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"/></svg>
                        <Fade left>
                            <h2 style={{position:"absolute", top:"0", left:"0", padding: "5rem 7rem", fontSize:"3rem", color:"white"}}>Why you choose Webster</h2>
                        </Fade>
                    </div>


                    <div className="col-sm-12 col-md-4 d-flex flex-column justify-content-center align-items-center mb-3">
                        <div className="card shadow-lg" style={{width:"18rem"}}>
                            <img className="img-fluid" src={learning1} alt="learning" style={{height:"200px"}}/>
                            <div className="card-body">
                                <h4 className="card-title text-center font-weight-bold">Many Languages</h4>
                                <p className="card-text text-center">whatever your search, there is a programming language for you.</p>
                            </div>
                            <div className="card-stats">
                                <div className="stat">
                                    <p className="card-text text-white">Webster approve</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4 d-flex flex-column justify-content-center align-items-center mb-3">
                        <div className="card shadow-lg" style={{width:"18rem"}}>
                            <img className="img-fluid" src={learning2} alt="learning" style={{height:"200px"}}/>
                            <div className="card-body">
                                <h4 className="card-title text-center font-weight-bold">Road to success</h4>
                                <p className="card-text text-center">success always start with curiosity, curiosity start with learning</p>
                            </div>
                            <div className="card-stats">
                                <div className="stat">
                                    <p className="card-text text-white">Webster approve</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4 d-flex flex-column justify-content-center align-items-center mb-3">
                        <div className="card shadow-lg" style={{width:"18rem"}}>
                            <img className="img-fluid" src={learning3} alt="learning" style={{height:"200px"}}/>
                            <div className="card-body">
                                <h4 className="card-title text-center font-weight-bold">Your world</h4>
                                <p className="card-text text-center">Where you want, when you want, white who you want</p>
                            </div>
                            <div className="card-stats">
                                <div className="stat">
                                    <p className="card-text text-white">Webster approve</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="row py-3" style={{minHeight:"18rem", background:"linear-gradient(to right, #457fca, #5691c8)"}}>
                <div className="col-sm-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
                    <svg width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-check-circle" fill="#FFFFFF"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path fillRule="evenodd"
                              d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
                    </svg>
                    <p className="text-white mt-5" style={{fontSize:"2rem"}}>Totaly free</p>
                </div>

                <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
                    <svg width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-people" fill="#FFFFFF"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                          d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                    </svg>
                    <p className="text-white mt-5" style={{fontSize:"2rem"}}>Community</p>
                </div>

                <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
                    <svg width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-star" fill="#FFFFFF"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                    </svg>
                    <p className="text-white mt-5" style={{fontSize:"2rem"}}>All levels</p>
                </div>

            </div>
        </>




    );

};

export default FirstLook;