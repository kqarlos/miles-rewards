import React, { useEffect } from 'react';
import Container from '../components/Container';
import RewardRow from '../components/RewardRow';
import LoadButton from '../components/LoadButton';
import SaveButton from '../components/SaveButton';
import UndoButton from '../components/UndoButton';
import RedoButton from '../components/RedoButton';
import { useStoreContext } from "../utils/GlobalState";


function Homepage() {

    const [state, dispatch] = useStoreContext();

    useEffect(() => {
        console.log("Loaded Homepage");
        console.log("State", state.rewards);
    }, []);

    return (

        <Container>

            <div className="row text-muted">
                <div className="col-2 border-bottom border-right pb-2 text-center">
                    Rewards
                </div>
                <div className="col-10 border-bottom border-right text-center pb-2">
                    Categories
                </div>
            </div>

            <div className="row text-muted">
                <div className="col-2 border-right">

                </div>
                <div className="col-2 border-bottom border-right py-3 text-center">
                    C1
                </div>
                <div className="col-2 border-bottom border-right py-3 text-center">
                    C2
                </div>
                <div className="col-2 border-bottom border-right py-3 text-center">
                    C3
                </div>
                <div className="col-2 border-bottom border-right py-3 text-center">
                    C4
                </div>
                <div className="col-2 border-bottom border-right py-3 text-center">
                    C5
                </div>
            </div>

            <RewardRow reward="R1" categories={state.rewards["R1"]} />

            <RewardRow reward="R2" categories={state.rewards["R2"]} />

            <RewardRow reward="R3" categories={state.rewards["R3"]} />

            <RewardRow reward="R4" categories={state.rewards["R4"]} />

            <RewardRow reward="R5" categories={state.rewards["R5"]} />

            <div className="row mt-4">
                <div className="col-4"></div>
                <div className="col-2 text-center">
                    <LoadButton />
                </div>
                <div className="col-2 text-center">
                    <SaveButton />
                </div>
                <div className="col-2 text-center">
                    <RedoButton />
                </div>
                <div className="col-2 text-center">
                    <UndoButton />
                </div>

            </div>
        </Container>
    );

}

export default Homepage;