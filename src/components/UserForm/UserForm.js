import { React, useMemo, useState, useEffect } from 'react';
// import axios from 'app/axios';
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchFormFieldsById,
    selectFields
} from './UserFormSlice';


const USER_FORM_ID = 1;

export default function UserForm() {
    const dispatch = useDispatch();
    const fields = useSelector(selectFields);

    useEffect(() => {
        dispatch(fetchFormFieldsById(USER_FORM_ID));
      }, []);

    useEffect(() => {
        console.log('hey')
        console.log(fields)
    }, [fields])

    return (
        <div>
            {/* {fields['page_title']} */}
        </div>
    )
}
