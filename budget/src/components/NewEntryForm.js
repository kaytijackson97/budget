import React from 'react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import { Form } from 'semantic-ui-react';
import EntryForm from './EntryForm';
import useEntryDetails from '../hooks/useEntryDetails';

function NewEntryForm() {
    const {
        description,
        value,
        isExpense,
        setDescription,
        setValue,
        setIsExpense,
        addEntry,
    } = useEntryDetails();
    
    return (
        <Form unstackable>
            <EntryForm 
                description={description}
                value={value}
                isExpense={isExpense}
                setDescription={setDescription}
                setValue={setValue}
                setIsExpense={setIsExpense}
            />
            <ButtonSaveOrCancel addEntry={addEntry}/>
        </Form>
    )
}

export default NewEntryForm
