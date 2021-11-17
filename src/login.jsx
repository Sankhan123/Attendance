import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default function Login() {
    return (
        <React.Fragment>


            <div class="container-fluid">
                <div class="row">
                    <div className="col-12 header-title">
                        <h1 className="h1">Attendance Management System</h1>
                    </div>
                    <center className="p-4">
                        <h3 className="h2">Welcome to Ingenium Digital</h3>
                    </center>
                    <div class="col-lg-7 col-sm-12">
                        <img className="img-fluid"  src="./images/logo.png" alt="logo" />

                    </div>
                    <div class="col-lg-4 col-sm-12 shadow  p-4 mt-5 border">
                        <h4>Login Here</h4>
                            
                        <form className="border  p-3">
                            <div>
                                <label className="form-label">Username : </label>
                                <input type="text" className="form-control " placeholder="Enter username" /><br />
                            </div>
                            <div>
                                <label className="form-label">Password : </label>
                                <input className="form-control  " type="password" placeholder="Enter password here" /><br />
                                <input type="submit" className="btn btn-primary " value="Login" />
                            </div>
                        </form>
                       
                    </div>

                  
                </div>
            </div>

        </React.Fragment>
    )
}