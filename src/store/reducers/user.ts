import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../../interfaces/User";
import userAPI from "../../api/userAPI";
import StoreDefaultState from "../../interfaces/StoreDefaultState";
import { defaultInitialState } from "../../utils/storeUtils";

interface UserState extends StoreDefaultState {
  user?: User;
}

// initial state
const initialState: UserState = {
  user: undefined,
  ...defaultInitialState,
};

// ==============================|| SLICE - USER ||============================== //

const user = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchUser.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
      }
    );
    builder.addCase(fetchUser.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const userActions = user.actions;

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (id: number) => {
    const response = await userAPI.fetchOne(id);
    return response.data;
  }
);
export default user;
