import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Swal from 'sweetalert2';

const signin_api = "https://wtsacademy.dedicateddevelopers.us/api/user/signin";
const api_url = "http://localhost:2000/completed-project";

const initial_value = {
    isLoading: false,
    status: 0,
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    profile_pic: "",
    message: "",
    errMsg: "",
    authToken: ""
};
export const sign_In = createAsyncThunk("admin/sign_In",
    async (userdata) => {
        const res = await axios.post(signin_api, userdata, {
            headers: {
                "Content-Type": "application/form-data",
                "Access-Control-Allow-Origin": "*"
            }
        })
        // console.log("api res: ",res.data);
        return res?.data;
    })


export const logOut = createAsyncThunk("admin/profile",
    async () => {
        window.sessionStorage.clear("Token")
    })


export const postCompleted = createAsyncThunk("admin/postCompleted",
    async (userData) => {
        const res = await axios.post(api_url, userData)
        // console.log("posting data: ",res);
        return res?.data;
    });


export const completed = createAsyncThunk("admin/completed",
    async () => {
        const res = await axios.get(api_url)
        // console.log("fetching data: ",res);
        return res?.data;
    });


export const deleteCompleted = createAsyncThunk("admin/deleteCompleted",
    async (id) => {
        const res = await axios.delete(`${api_url}/${id}`)
        // console.log("Delete response: ", res);
        return res?.data;
    });


export const AdminSlice = createSlice({
    name: "admin",
    initialState: initial_value,
    extraReducers: (builder) => {

        builder.addCase(sign_In.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(sign_In.fulfilled, (state, action) => {
            console.log("action:", action);
            if (action.payload.status === 200) {
                window.sessionStorage.setItem("authToken", action.payload.token);
                state.isLoading = false;
                state.status = action.payload.status;
                state.first_name = action.payload.data.first_name;
                state.last_name = action.payload.data.last_name;
                state.email = action.payload.data.email;
                state.message = action.payload.data.message;
                Swal.fire({
                    icon: 'success',
                    title: `Welcome back! ${state.first_name} ${state.last_name}`,
                    showConfirmButton: true,
                    timer: 1500
                })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Wrong userId or password!',
                })
            }
        })
        builder.addCase(sign_In.rejected, (state, action) => {
            // console.log("actions:", action);
            state.isLoading = false;
            state.create = [];
            state.error = action.error.message;
        })


        builder.addCase(logOut.pending, (state, action) => {
            // console.log("Action: ",action);
            state.isLoading = true;
        })
        builder.addCase(logOut.fulfilled, (state, action) => {
            // console.log("Action for all completed projects: ", action);
            state.isLoading = false;
            Swal.fire({
                icon: 'success',
                title: 'logout sucessfully',
                showConfirmButton: true,
                timer: 1000
            })
        })
        builder.addCase(logOut.rejected, (state, action) => {
            // console.log("Action: ",action);
            state.isLoading = false;
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        })




        builder.addCase(postCompleted.pending, (state, action) => {
            state.isLoading = true;
            //  console.log("Action: ",action);
        })
        builder.addCase(postCompleted.fulfilled, (state, action) => {
            state.isLoading = false;
            // console.log("Action: ",action);
            Swal.fire({
                icon: 'success',
                title: 'Images has been added',
                showConfirmButton: true,
                timer: 1500
            })
        })
        builder.addCase(postCompleted.rejected, (state, action) => {
            state.isLoading = false
            // console.log("Action: ",action);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        })


        builder.addCase(completed.pending, (state, action) => {
            // console.log("Action: ",action);
            state.isLoading = true;
        })
        builder.addCase(completed.fulfilled, (state, action) => {
            // console.log("Action for all completed projects: ",action);
            state.isLoading = false;
        })
        builder.addCase(completed.rejected, (state, action) => {
            // console.log("Action: ",action);
            state.isLoading = false;
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        })


        builder.addCase(deleteCompleted.pending, (state, action) => {
            // console.log("Action: ",action);
            state.isLoading = true;
        })
        builder.addCase(deleteCompleted.fulfilled, (state, action) => {
            // console.log("Action for all completed projects: ",action);
            state.isLoading = false;
            Swal.fire({
                icon: 'success',
                title: 'Images has been deleted',
                showConfirmButton: false,
                timer: 2000
            })
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        })
        builder.addCase(deleteCompleted.rejected, (state, action) => {
            // console.log("Action: ",action);
            state.isLoading = false;
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        })


    }
})


export default AdminSlice.reducer