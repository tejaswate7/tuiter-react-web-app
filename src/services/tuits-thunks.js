import { createAsyncThunk } from '@reduxjs/toolkit'
import * as service from "./tuits-service"

export const findTuitsThunk = createAsyncThunk(
    "tuits/findTuits", async (thunkAPI) =>
        await service.findTuits()
)

export const deleteTuitThunk = createAsyncThunk (
    "tuits/deleteTuit", async (tuitId) => {
        console.log("delete Tuit Thunk", tuitId)
        await service.deleteTuit(tuitId)
    }
)

export const createTuitThunk = createAsyncThunk(
    "tuits/createTuit", async(tuitContent) => {
        await service.createTuit(tuitContent)
    }
)

export const updateTuitThunk =
    createAsyncThunk(
        'tuits/updateTuit',
        async (tuit) => {
            await service.updateTuit(tuit)
        }
    )