import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';


function DisplayBalances({incomeTotal, expenseTotal}) {
    return (
        <Segment textAlign="center">
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                    <DisplayBalance size="tiny" color="green" textAlign="left" 
                        title="Income" value={incomeTotal} />
                    </Grid.Column>
                    <Grid.Column>
                    <DisplayBalance size="tiny" color="red" textAlign="left" 
                        title="Expenses" value={expenseTotal} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default DisplayBalances
