import { configureStore } from '@reduxjs/toolkit';
import userFormReducer from 'components/UserForm/UserFormSlice';


export default configureStore({
  reducer: {
    fields: userFormReducer,
  },
});
