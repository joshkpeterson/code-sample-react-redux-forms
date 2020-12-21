import { React, useMemo, useState, useEffect } from 'react';
// import axios from 'app/axios';
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchFormFieldsById,
} from './UserFormSlice';


const USER_FORM_ID = 1;

export default function UserForm() {
    const dispatch = useDispatch();
    // const fields = useSelector((state) => state.fields.value)

    useEffect(() => {
        async function fetchData () {
            dispatch(fetchFormFieldsById(USER_FORM_ID));
           
            // setData(result.data.series);
            // console.log(result.data);
        }

        fetchData();

      }, []);

    return (
        <div>
            yoyo
        </div>
    )
}
