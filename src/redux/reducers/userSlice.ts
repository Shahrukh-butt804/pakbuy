import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Load user from localStorage
const userFromStorage = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user')!)
  : null;

interface UserState {
  user: any;
}

const initialState: UserState = {
  user: userFromStorage,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<any>) {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem('user');
    },
  },
});

export const { setUser, logout } = userSlice.actions;

// Selector to get the user
export const selectUser = (state: any) => state.user.user;

export default userSlice.reducer;


// import { useSelector } from 'react-redux';
// import { isLoggedIn, selectUser } from '../redux/slices/userSlice';
// const user = useSelector(selectUser);