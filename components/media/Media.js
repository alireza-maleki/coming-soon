import classes from "./Media.module.scss"

import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";

const Media = (props) => {

    const darkMode = props.darkMode;

    return (
        <div className="container mt-5">

            <div className="row justify-content-center text-center">

                <div className="col-12">
                    <p className={` fw-bold ${darkMode ? classes['text-white'] : classes['text-dark']} `}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                    </p>
                </div>

                <div className="input-group col-12 col-md-5 col-sm-6 mt-3 rounded">
                    <input className="form-control rounded" />
                    <button className="btn btn-primary rounded fw-bold">عضویت</button>
                </div>

                <div className={classes.media}>
                    <BsTwitter className={classes.icons} />
                    <BsFacebook className={classes.icons} />
                    <AiFillInstagram className={classes.icons} />
                    <ImLinkedin className={classes.icons} />
                </div>

            </div>

        </div >
    )

}

export default Media;