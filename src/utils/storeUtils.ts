import StoreDefaultState from "../interfaces/StoreDefaultState";
import {
  ActionReducerMapBuilder,
  AsyncThunk,
  PayloadAction,
} from "@reduxjs/toolkit";

export const defaultInitialState = {
  loading: false,
  error: false,
};

const fetchPending = (state: StoreDefaultState) => {
  state.loading = true;
};

const fetchFulfilled = <Type extends StoreDefaultState>(
  state: Type,
  action: PayloadAction<any>,
  property: string
) => {
  state.loading = false;
  // @ts-ignore
  state[property] = action.payload;
};

const fetchRejected = (state: StoreDefaultState) => {
  state.loading = false;
  state.error = true;
};

export const storeAddFetch = (
  builder: ActionReducerMapBuilder<any>,
  thunk: AsyncThunk<any, any, any>,
  property: string
) => {
  builder.addCase(thunk.pending, (state) => fetchPending(state));
  builder.addCase(thunk.fulfilled, (state, action) =>
    fetchFulfilled(state, action, property)
  );
  builder.addCase(thunk.rejected, (state) => fetchRejected(state));
};
