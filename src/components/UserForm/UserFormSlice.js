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
    initialState: { entities: [], loading: 'idle' },
    reducers: {
        fieldsLoading(state, action) {
            // Use a "state machine" approach for loading state instead of booleans
            if (state.loading === 'idle') {
                state.loading = 'pending';
            }
        },
        fieldsReceived(state, action) {
            if (state.loading === 'pending') {
                state.loading = 'idle';
                state.fields = action.payload;
            }
        }
    },
    extraReducers: {
        [fetchFormFieldsById.fulfilled]: (state, action) => {
            state.entities.push(action.payload);
        }
    }
})

export default userFormSlice.reducer;