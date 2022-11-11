import { createAsyncThunk } from '@reduxjs/toolkit'
import * as service from "./tuits-service"

export const findTuitsThunk = createAsyncThunk(
    "tuits/findTuits", async (thunkAPI) =>
        await service.findTuits()
)

export const deleteTuitThunk = createAsyncThunk (
    "tuits/deleteTuit", async (tuit, thunkAPI) => {
        await service.deleteTuit(tuit)
    }
)
