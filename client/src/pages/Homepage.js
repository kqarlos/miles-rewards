import React, { useEffect } from 'react';
import Container from '../components/Container';
import RewardRow from '../components/RewardRow';
import SaveButton from '../components/SaveButton';
import { useStoreContext } from "../utils/GlobalState";


function Homepage() {

    const [state, dispatch] = useStoreContext();

    useEffect(() => {
        console.log("Loaded Homepage");
        console.log("State", state.rewards);
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

            <RewardRow reward="R1" categories={state.rewards["R1"]} />

            <RewardRow reward="R2" categories={state.rewards["R2"]} />

            <RewardRow reward="R3" categories={state.rewards["R3"]} />

            <RewardRow reward="R4" categories={state.rewards["R4"]} />

            <RewardRow reward="R5" categories={state.rewards["R5"]} />

            <div className="row">
                <div className="col-2">
                    <SaveButton />
                </div>
            </div>
        </Container>
    );

}

export default Homepage;