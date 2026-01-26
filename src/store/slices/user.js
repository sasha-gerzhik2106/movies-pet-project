import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoading: false,
    user: null,
  },
  reducers: {
    login: (state, action) => {
      // fetch(.., { email: action.payload.email, password: action.payload.password })
    },
    logout: () => ({ user: null }),
    setUser: (state, action) => ({ user: action.payload }),
  },
});

export const useUser = () => useSelector((store) => store.users.user);
export const useIsLoggedIn = () => useUser() !== null;
export const useIsUserLoading = () =>
  useSelector((store) => store.users.isLoading);

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
