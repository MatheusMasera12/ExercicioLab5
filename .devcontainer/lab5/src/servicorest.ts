import axios from 'axios'

const baseURL = "https://reqres.in/";

export async function getUser() {
    const resultadoGet = await axios.get(`${baseURL}api/users/2`);
    console.log("GET:", resultadoGet.data);
}

export async function createPost() {
    const headers = {
        "x-api-key": "reqres-free-v1"
    };

    const resultadoPost = await axios.post(`${baseURL}api/users`, {
        "name": "morpheus",
        "job": "leader"
    }, { headers });
    console.log("POST:", resultadoPost.data);
}

export async function updatePut() {
    const headers = {
        "x-api-key": "reqres-free-v1"
    };

    const resultadoPut = await axios.put(`${baseURL}api/users/2`, {
        "name": "morpheus",
        "job": "zion resident"
    }, { headers });
    console.log("PUT:", resultadoPut.data);
}

export async function updatePatch() {
    const headers = {
        "x-api-key": "reqres-free-v1"
    };

    const resultadoPatch = await axios.patch(`${baseURL}api/users/2`, {
        "name": "morpheus",
        "job": "zion resident"
    }, { headers });
    console.log("PATCH:", resultadoPatch.data);
}

export async function deleteUser() {
    const headers = {
        "x-api-key": "reqres-free-v1"
    };

    const resultadoDelete = await axios.delete(`${baseURL}api/users/2`, { headers });
    console.log("DELETE:", resultadoDelete.data);
}