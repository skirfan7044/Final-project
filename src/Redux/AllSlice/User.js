import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Swal from 'sweetalert2';

const contact_url = 'http://localhost:2000/contact';
const estimation_url = 'http://localhost:2000/estimation';
const carousal_url = 'http://localhost:2000/carousel';

const initial_value = {
    isLoading: false,
    error: null,
    full_name: "",
    subject: "",
    address: "",
    mobile_number: "",
    email: "",
    id: ""
};



export const carousal = createAsyncThunk("user/carousal",
    async () => {
        const res = await axios.get(carousal_url)
        return res?.data;
    });


export const contact = createAsyncThunk("user/contact",
    async (userData) => {
        const res = await axios.post(contact_url, userData)
        return res?.data;
    });

export const contactView = createAsyncThunk("user/contactView",
    async () => {
        const res = await axios.get(contact_url)
        return res?.data;
    });

export const contactUpdate = createAsyncThunk("user/contactUpdate",
    async (upDate) => {
        const { id, formValue } = upDate;
        const res = await axios.put(`${contact_url}/${id}`, formValue)
        // console.log("Res for update: ", upDate);
        return res?.data;
    });

export const contactDelete = createAsyncThunk("user/contactDelete",
    async (dataId) => {
        const res = await axios.delete(`${contact_url}/${dataId}`)
        return res?.data;
    });


export const estimationPost = createAsyncThunk("user/estimationPost",
    async (userData) => {
        const res = await axios.post(estimation_url, userData)
        return res?.data;
    });

export const estimationView = createAsyncThunk("user/estimationView",
    async () => {
        const res = await axios.get(estimation_url)
        return res?.data;
    });

export const EstimationUpdate = createAsyncThunk("user/EstimationUpdate",
    async (upDate) => {
        const { id, formValue } = upDate;
        const res = await axios.put(`${estimation_url}/${id}`, formValue)
        console.log("Res for update: ", upDate);
        return res?.data;
    });

export const estimationDelete = createAsyncThunk("user/estimationDelete",
    async (dataId) => {
        const res = await axios.delete(`${estimation_url}/${dataId}`)
        return res?.data;
    });


export const UserSlice = createSlice({
    name: "user",
    initialState: initial_value,
    extraReducers: (builder) => {


        builder.addCase(carousal.pending, (state, action) => {
            // console.log("Action: ", action);
            state.isLoading = true;
        })
        builder.addCase(carousal.fulfilled, (state, action) => {
            // console.log("Action: ",action);
            state.isLoading = false;
        })
        builder.addCase(carousal.rejected, (state, action) => {
            // console.log("Action: ",action);
            state.isLoading = false;
        })


        builder.addCase(contact.pending, (state, action) => {
            // console.log("Action: ", action);
            state.isLoading = true;
        })
        builder.addCase(contact.fulfilled, (state, action) => {
            // console.log("Action: ",action);
            state.isLoading = false;
            Swal.fire({
                icon: 'success',
                title: 'Your form has been accepted',
                showConfirmButton: false,
                timer: 2500
            })
        })
        builder.addCase(contact.rejected, (state, action) => {
            // console.log("Action: ",action);
            state.isLoading = false;
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        })


        builder.addCase(contactView.pending, (state, action) => {
            // console.log("Action: ", action);
            state.isLoading = true;
        })
        builder.addCase(contactView.fulfilled, (state, action) => {
            // console.log("Action: ",action);
            state.isLoading = false;
        })
        builder.addCase(contactView.rejected, (state, action) => {
            // console.log("Action: ",action);
            state.isLoading = false;
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        })


        builder.addCase(contactUpdate.pending, (state, action) => {
            // console.log("Action: ", action);
            state.isLoading = true;
        })
        builder.addCase(contactUpdate.fulfilled, (state, action) => {
            // console.log("Action: ",action);
            state.isLoading = false;
            Swal.fire({
                icon: 'success',
                title: 'Status is updated',
                showConfirmButton: false,
                timer: 2000
            })
        })
        builder.addCase(contactUpdate.rejected, (state, action) => {
            // console.log("Action: ",action);
            state.isLoading = false;
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        })


        builder.addCase(contactDelete.pending, (state, action) => {
            // console.log("Action: ", action);
            state.isLoading = true;
        })
        builder.addCase(contactDelete.fulfilled, (state, action) => {
            // console.log("Action: ", action);
            state.isLoading = false;
            state.isLoading = false;
            Swal.fire({
                icon: 'success',
                title: 'Deleted successfully',
                showConfirmButton: false,
                timer: 2000
            })
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        })
        builder.addCase(contactDelete.rejected, (state, action) => {
            // console.log("Action: ", action);
            state.isLoading = false;
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        })




        builder.addCase(estimationPost.pending, (state, action) => {
            // console.log("Action: ", action);
            state.isLoading = true;
        })
        builder.addCase(estimationPost.fulfilled, (state, action) => {
            // console.log("Action: ",action);
            state.isLoading = false;
            Swal.fire({
                icon: 'success',
                title: 'We will inform you soon',
                showConfirmButton: false,
                timer: 1500
            })
        })
        builder.addCase(estimationPost.rejected, (state, action) => {
            // console.log("Action: ",action);
            state.isLoading = false;
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        })


        builder.addCase(estimationView.pending, (state, action) => {
            // console.log("Action: ", action);
            state.isLoading = true;
        })
        builder.addCase(estimationView.fulfilled, (state, action) => {
            // console.log("Action: ",action);
            state.isLoading = false;
        })
        builder.addCase(estimationView.rejected, (state, action) => {
            // console.log("Action: ",action);
            state.isLoading = false;
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        })


        builder.addCase(EstimationUpdate.pending, (state, action) => {
            // console.log("Action: ", action);
            state.isLoading = true;
        })
        builder.addCase(EstimationUpdate.fulfilled, (state, action) => {
            // console.log("Action: ",action);
            state.isLoading = false;
            Swal.fire({
                icon: 'success',
                title: 'Status is updated',
                showConfirmButton: false,
                timer: 1500
            })
        })
        builder.addCase(EstimationUpdate.rejected, (state, action) => {
            // console.log("Action: ",action);
            state.isLoading = false;
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        })

        builder.addCase(estimationDelete.pending, (state, action) => {
            // console.log("Action: ", action);
            state.isLoading = true;
        })
        builder.addCase(estimationDelete.fulfilled, (state, action) => {
            // console.log("Action: ", action);
            state.isLoading = false;
            Swal.fire({
                icon: 'success',
                title: 'Deleted successfully',
                showConfirmButton: false,
                timer: 2000
            })
            setTimeout(() => {
                window.location.reload();
            }, 2100);
        })
        builder.addCase(estimationDelete.rejected, (state, action) => {
            // console.log("Action: ", action);
            state.isLoading = false;
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        })
    }
})


export default UserSlice.reducer