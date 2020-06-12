import React, { useEffect } from 'react';
import Container from '../components/Container'

function Homepage() {

    useEffect(() => {
        console.log("Loaded Homepage");
    }, []);

    return (

        <Container>

            <div className="row">
                <div className="col-2">
                    Rewards
                    </div>
                <div className="col-10">
                    Categories
                    </div>
            </div>

            <div className="row">
                <div className="col-2">

                </div>
                <div className="col-2">
                    C1
                    </div>
                <div className="col-2">
                    C2
                    </div>
                <div className="col-2">
                    C3
                    </div>
                <div className="col-2">
                    C4
                    </div>
                <div className="col-2">
                    C5
                    </div>
            </div>
            
        </Container>
    );

}

export default Homepage;