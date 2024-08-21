import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum Role {
  Worker = 'worker',
  Client = 'client',
  Admin = 'admin',
}

// Define a type for the slice state
export interface AuthState {
  user : null | {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    role: Role,
  }
  token: string | null,
  code: string | null,
  status: 'idle' | 'loading' | 'failed',
}

// Define the initial state using that type
const initialState: AuthState = {
  user: null,
  token: null,
  code: null,
  status: 'idle',
};

const getCode = createAsyncThunk(
  'auth/getCode',
  async (email: string) => {
    const response = await fetch('https://example.com/api/auth/getCode', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
    const data = await response.json();
    return data.code;
  }
);

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthState["user"]>) => {
      state.user = action.payload;
    },
    setToken: (state, action: PayloadAction<AuthState["token"]>) => {
      state.token = action.payload;
    },
  },
});

export const { setUser, setToken } = authSlice.actions;

export default authSlice.reducer;
