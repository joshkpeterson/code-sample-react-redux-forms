import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'app/axios';

// First, create the thunk
export const fetchFormFieldsById = createAsyncThunk(
    'userForm/requestFieldsById',
    async (id, thunkAPI) => {
        const response = await axios(`form-fields/${id}`)
        return response.data;
    }
)
    
// Then, handle actions in your reducers:
const userFormSlice = createSlice({
    name: 'userForm',
    initialState: {},
    reducers: {
        fieldsLoading(state, action) {
            if (state.loading === 'idle') {
                state.loading = 'pending';
            }
        },
        fieldsReceived(state, action) {
            if (state.loading === 'pending') {
                state.loading = 'idle';
                state.value = action.payload;
            }
        }
    },
    extraReducers: {
        [fetchFormFieldsById.fulfilled]: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const selectFields = state => state.fields.value;

export default userFormSlice.reducer;