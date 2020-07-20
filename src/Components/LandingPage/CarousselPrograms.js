import javascript from "../../Images/javascript-programming-language.png";
import java from "../../Images/java-programming-language.png";
import php from "../../Images/php-programming-language.png";
import symfony from "../../Images/symfony.png";
import springboot from "../../Images/spring.png";
import reactjs from "../../Images/react-js.png";
import laravel from "../../Images/laravel.png";
import bootstrapI from "../../Images/bootstrap-4.png";
import vueJs from "../../Images/vue-js.png";
import React from "react";

const CarousselPrograms = () => {
    return <div className="row" style={{background: "#FC8181"}}>
        <div className="col-md-12 px-0">
            <div id="gallery" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">
                            <div
                                className="col-md-4 d-flex flex-column justify-content-center align-items-center">
                                <img className="p-lg-5"
                                     src={javascript}
                                     alt="javascript" height="250px"/>
                            </div>

                            <div
                                className="col-md-4 d-flex flex-column justify-content-center align-items-center">
                                <img className="p-lg-5"
                                     src={java}
                                     alt="java" height="250px"/>
                            </div>

                            <div
                                className="col-md-4 d-flex flex-column justify-content-center align-items-center">
                                <img className="p-lg-5"
                                     src={php}
                                     alt="php" height="250px"/>
                            </div>

                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="row">
                            <div
                                className="col-md-4 d-flex flex-column justify-content-center align-items-center">
                                <img className="p-lg-5"
                                     src={symfony}
                                     alt="symfony" height="250px"/>
                            </div>

                            <div
                                className="col-md-4 d-flex flex-column justify-content-center align-items-center">
                                <img className="p-lg-5"
                                     src={springboot}
                                     alt="spring" height="250px"/>
                            </div>

                            <div
                                className="col-md-4 d-flex flex-column justify-content-center align-items-center">
                                <img className="p-lg-5"
                                     src={reactjs}
                                     alt="react" height="250px"/>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="row">
                            <div
                                className="col-md-4 d-flex flex-column justify-content-center align-items-center">
                                <img className="p-lg-5"
                                     src={laravel}
                                     alt="laravel" height="250px"/>
                            </div>

                            <div
                                className="col-md-4 d-flex flex-column justify-content-center align-items-center">
                                <img className="p-lg-5"
                                     src={bootstrapI}
                                     alt="bootstrap" height="250px"/>
                            </div>

                            <div
                                className="col-md-4 d-flex flex-column justify-content-center align-items-center">
                                <img className="p-lg-5"
                                     src={vueJs}
                                     alt="vue" height="250px"/>
                            </div>
                        </div>
                    </div>

                </div>

                <a className="carousel-control-prev" href="#gallery" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"/>
                    <span className="sr-only">Previous</span>
                </a>

                <a className="carousel-control-next" href="#gallery" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    </div>;
};

export default  CarousselPrograms;