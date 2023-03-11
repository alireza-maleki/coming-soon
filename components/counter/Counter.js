import React, { useState, useEffect } from "react";
import classes from "./Counter.module.scss";


const Counter = (props) => {

    const [history, setHistory] = useState({
        days: '00',
        hours: '00',
        minuts: '00',
        seconds: '00',
    });
    
    console.log(history.days);

    useEffect(() => {

        let endDate = new Date(2023, 11, 11).getTime();

        setInterval(() => {

            let newDate = new Date().getTime();
            let time = endDate - newDate;

            if (time >= 0) {

                setHistory.days = Math.floor(time / (1000 * 60 * 60 * 24));
                setHistory.hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                setHistory.minuts = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
                setHistory.seconds = Math.floor((time % (1000 * 60)) / (1000));

            }
            


        }, 1000)

    }, []);

    const darkMode = props.darkMode;

    return (
        <section className="container mt-5">

            <div className={` row justify-content-center ${classes.content}`}>

                <div className={` ${darkMode ? classes['text-white'] : classes['text-dark']} `}>
                    <h3>{history.days}</h3>
                    <h5 className="fw-bold">روز</h5>
                </div>

                <div className={` ${darkMode ? classes['text-white'] : classes['text-dark']} `}>
                    <h3>{history.hours}</h3>
                    <h5 className="fw-bold">ساعت</h5>
                </div>

                <div className={` ${darkMode ? classes['text-white'] : classes['text-dark']} `}>
                    <h3>{history.minuts}</h3>
                    <h5 className="fw-bold">دقیقه</h5>
                </div>

                <div className={` ${darkMode ? classes['text-white'] : classes['text-dark']} `}>
                    <h3>{history.seconds}</h3>
                    <h5 className="fw-bold">ثانیه</h5>
                </div>

            </div>

        </section>
    )

}

export default Counter;













