import axios from 'axios';
// const TUITS_API = "http://localhost:4000/api/tuits"
// const TUITS_API = 'https://tuiter-node-server-app-tejas.herokuapp.com/api/tuits';
const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;

export const createTuit = async (tuit) => {
    console.log("createTuit called", tuit)
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
}

export const findTuits = async () => {
    const response = await axios.get(TUITS_API)
    console.log("findTuits called", response)
    const tuits = response.data
    return tuits
}

export const deleteTuit = async (tuit) => {
    console.log("deleteTuit called", tuit)
    const response = await axios
        .delete(`${TUITS_API}/${tuit}`);
    console.log("deleteTuit rercord deleted response", response)
    console.log("deleteTuit rercord deleted data is", response.data)
    return tuit;
}

export const updateTuit = async (tuit) => {
    console.log("updateTuit called", tuit)
    const response = await axios
        .put(`${TUITS_API}/${tuit._id}`, tuit);
    return tuit;
}