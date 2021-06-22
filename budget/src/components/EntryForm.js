import React, { Fragment } from 'react'
import { Checkbox, Form, Segment } from 'semantic-ui-react'

function EntryForm({description, value, isExpense, setDescription, setValue, setIsExpense}) {
    return (
        <Fragment>
            <Form.Group widths={3}>
                <Form.Input 
                    icon="tags"
                    width={12}
                    label="Description"
                    placeholder="New shiny thing"
                    value={description}
                    onChange={(event)=> setDescription(event.target.value)}
                />

                <Form.Input
                    width={4}
                    label="value"
                    placeholder="100"
                    icon="dollar"
                    iconPosition="left"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />
            </Form.Group>
            <Segment compact>
                <Checkbox 
                toggle 
                label="is expense" 
                checked={isExpense}
                onChange={() => setIsExpense((oldState) => !oldState)}
                />
            </Segment>
        </Fragment>
    )
}

export default EntryForm
