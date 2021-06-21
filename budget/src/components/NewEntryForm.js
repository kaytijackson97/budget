import React from 'react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import { Form } from 'semantic-ui-react';

function NewEntryForm() {
    return (
        <Form unstackable>
            <Form.Group>
            <Form.Input 
            icon="tags"
            width={12}
            label="Description"
            placeholder="New shiny thing"/>

            <Form.Input
                width={4}
                label="value"
                placeholder="100"
                icon="dollar"
                iconPosition="left"/>
            </Form.Group>
            <ButtonSaveOrCancel />
        </Form>
    )
}

export default NewEntryForm
