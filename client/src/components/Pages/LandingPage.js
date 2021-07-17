import React from 'react';
import Button from '../Common/Button/Button';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return(
        <div className="container-fluid">
            <div class="row no-gutter">
            <div class="col-md-6 d-none d-md-flex bg-image"></div>
                {/* <div className="padding-32 side-col full-height white-bg mobile-full-height"> */}
                <div className="padding-32 full-height white-bg mobile-full-height">

                {/* <div className="mx-auto"> */}
                    <div className="margin-s padding-32 no-padding-mobile">
                        <h1 className="margin-m text-center font-size-l">FastChat</h1>
                        <h2 className="margin-s text-center">A simple way to connect with your friends, anytime, anywhere.</h2>
                    </div>
                    {/* Desktop view */}
                    <div className="margin-ml">
                        <Link to="/register"><Button btnStyle="Button margin-xs">Register</Button></Link>
                        <Link to="/login"><Button btnStyle="Button margin-xs">Login</Button></Link>
                    </div>
                    </div>
                </div>
                <div className="col blue-bg padding-32 mobile-hide"> </div>                           
            </div>      
    );
}

export default LandingPage;