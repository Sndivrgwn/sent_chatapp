import React, { useState } from "react";
import photos from "../assets/image.js";
import './login.css';

const Log = () => {

    return (
        <div className=" bg-base-200 min-h-screen">
            <div className=" flex justify-between xl:min-h-screen bg">
                <div className="card w-full max-w-[48vw] shadow-2xl backdrop-blur-md backdrop-brightness-50 rounded-none">
                    <form className="card-body">
                        <div className="grid place-content-center h-full">
                            <div className="logo gap-5">
                                <div className="xl:w-[5vw]"><img src={photos.logo} alt="" /></div>
                                <h1 className="xl:text-[4vw] xl:font-bold text-gray-300">SENT</h1>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered xl:w-[17vw]" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered xl:w-[17vw]" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="mx-auto btn btn-primary w-[50%]">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="text-center lg:text-left">
                </div>
            </div>
        </div>
    );
};

export default Log;
