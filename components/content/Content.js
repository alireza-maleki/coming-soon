import React, { useState, useEffect } from "react";
// import { init } from 'ityped';

import classes from "./Content.module.scss";

const Content = (props) => {

    const darkMode = props.darkMode;

    useEffect(() => {


    }, [])

    return (

        <div className="container mt-5">
            <div className="row text-center">
                <h2 className="mb-4">
                    <span className="fw-bold ms-2 text-primary ">لورم ایپسوم</span>
                    <span id="myElement" className={` ${darkMode ? classes['text-white'] : classes['text-dark']} ${classes['ityped-cursor']} `}>
                        متن ساختگی با تولید سادگی ...
                    </span>
                </h2>
                <p className={` lh-lg fs-5 ${darkMode ? classes['text-white'] : classes['text-dark']}`}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                </p>
            </div>
        </div>

    )

}


export default Content;















