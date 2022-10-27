import { createSlice } from "@reduxjs/toolkit";
import profile from "../data/profile.json";

const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
        updateProfile(state, action) {
            state[0].firstName = action.payload.prof["name"].split(" ")[0]
            state[0].lastName = action.payload.prof["name"].split(" ")[1]
            state[0].bio = action.payload.prof["bio"]
            state[0].location = action.payload.prof["location"]
            state[0].website = action.payload.prof["website"]
        }
    }
});

export const { updateProfile } = profileSlice.actions
export default profileSlice.reducer;