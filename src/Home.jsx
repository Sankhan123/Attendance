import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    const day = new Date().toLocaleDateString()
    return (
        <React.Fragment>

            <div class="content-wrapper">
                <div class="card">
                    <div class="card-header header-elements-inline" style={{ textAlign: 'right' }}>
                        <p>Today is {day} </p>
                    </div>
                    <div class="card-body">

                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}