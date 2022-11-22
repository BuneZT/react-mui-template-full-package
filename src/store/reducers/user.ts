import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import User from "../../interfaces/User";
import userAPI from "../../api/userAPI";
import StoreDefaultState from "../../interfaces/StoreDefaultState";
import { defaultInitialState, storeAddFetch } from "../../utils/storeUtils";

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
    storeAddFetch(builder, fetchUser, "user");
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
