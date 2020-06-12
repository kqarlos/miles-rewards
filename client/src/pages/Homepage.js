import React, { useEffect } from 'react';
import Container from '../components/Container'
import RewardRow from '../components/RewardRow'


function Homepage() {

    useEffect(() => {
        console.log("Loaded Homepage");
    }, []);

    return (

        <Container>

            <div className="row">
                <div className="col-2 border-bottom border-right">
                    Rewards
                </div>
                <div className="col-10 border-bottom">
                    Categories
                </div>
            </div>

            <div className="row ">
                <div className="col-2 border-right">

                </div>
                <div className="col-2 border-bottom border-right">
                    C1
                </div>
                <div className="col-2 border-bottom border-right">
                    C2
                </div>
                <div className="col-2 border-bottom border-right">
                    C3
                </div>
                <div className="col-2 border-bottom border-right">
                    C4
                </div>
                <div className="col-2 border-bottom">
                    C5
                </div>
            </div>

            <RewardRow reward="R1" />

            <RewardRow reward="R2" />

            <RewardRow reward="R3" />

            <RewardRow reward="R4" />

            <RewardRow reward="R5" />


        </Container>
    );

}

export default Homepage;