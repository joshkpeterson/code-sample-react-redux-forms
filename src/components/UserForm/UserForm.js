import { React, useMemo, useState, useEffect } from 'react';
import axios from 'app/axios';

export default function UserForm() {
    useEffect(() => {
        async function fetchData () {
            const result = await axios(
                'form-fields/1',
              );
           
              // setData(result.data.series);
              console.log(result.data);
        }

        fetchData();

      }, []);

    return (
        <div>
            yoyo
        </div>
    )
}
