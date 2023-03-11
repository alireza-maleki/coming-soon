import classes from "./Location.module.scss";

import { MdLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { FiSmartphone } from "react-icons/fi";

// === React Leaflet ===
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// import Google from './Google';



const Location = () => {


    return (

        <div className="container mt-5">

            <div className="row">

                <div className="col-12 text-center justify-content-center">
                    <h2>ارتباط با ما</h2>
                    <hr className={classes.hr} />
                </div>

                <div className={` col-lg-4 offset-1 p-4 my-5 ${classes['user-location']} `}>

                    <div className="row text-end">

                        <div className="col-12 d-flex align-items-center mb-3">

                            <MdLocationOn className={classes.icon} />
                            <div>
                                <h4 className="fw-bold">آدرس :</h4>
                                <p className="fw-bold">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>
                            </div>

                        </div>

                        <div className="col-12 d-flex align-items-center mb-3">

                            <HiOutlineMail className={classes.icon} />
                            <div>
                                <h4 className="fw-bold">ایمیل :</h4>
                                <p className="fw-bold">info@yahoo.com</p>
                            </div>

                        </div>

                        <div className="col-12 d-flex align-items-center mb-3">

                            <FiSmartphone className={classes.icon} />
                            <div>
                                <h4 className="fw-bold">شماره تماس :</h4>
                                <p className="fw-bold">09017730800</p>
                            </div>

                        </div>


                        {/* === Map === */}
                        {/* <Google /> */}

                    </div>

                </div>


                <div className={` col-lg-7 2 p-4 my-5 ${classes.form} `}>

                    <div className="row text-end">
                        <div className="col-lg-6">
                            <label className="form-label fw-bold">نام :</label>
                            <input className="form-control" />
                        </div>
                        <div className="col-lg-6">
                            <label className="form-label fw-bold">ایمیل :</label>
                            <input className="form-control" />
                        </div>

                        <div className="col-12 mt-3">
                            <label className="form-label fw-bold">موضوع :</label>
                            <input className="form-control" />
                        </div>

                        <div className="col-12 mt-4">
                            <label className="form-label fw-bold">متن پیام :</label>
                            <textarea className="form-control" rows="6"/>
                        </div>
                    </div>

                    <div className="row my-5">
                        <div className="col-12 text-center justify-content-center">
                            <button className="btn btn-primary fw-bold">ارسال پیام</button>
                        </div>
                    </div>


                </div>


            </div>

        </div>

    )

}


export default Location;