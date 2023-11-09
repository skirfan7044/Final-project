import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Swal from 'sweetalert2';

const contact_url = 'http://localhost:2000/contact';
const estimation_url = 'http://localhost:2000/estimation';
const carousal_url = 'http://localhost:2000/carousel';
const reg_api = "https://wtsacademy.dedicateddevelopers.us/api/user/signup";
const signin_api = "https://wtsacademy.dedicateddevelopers.us/api/user/signin";
const api_url = "http://localhost:2000/completed-project";

const initial_value = {
    isLoading: false,
    error: null,
    status: 0,
    full_name: "",
    subject: "",
    address: "",
    mobile_number: "",
    email: "",
    square_feet: "",
    contact_status: "",
    estimation_status: "",
    first_name: "",
    last_name: "",
    password: "",
    message: "",
    errMsg: "",
    authToken: "",
    token: "",
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

export const sign_up = createAsyncThunk("user/sign_up",
    async (userdata) => {
        const res = await axios.post(reg_api, userdata, {
            headers: {
                "Content-Type": "application/form-data",
                "Access-Control-Allow-Origin": "*"
            }
        })
        // console.log("api res: ",res.data);
        return res?.data;
    })

export const sign_In = createAsyncThunk("user/sign_In",
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


export const logOut = createAsyncThunk("user/logOut",
    async () => {
        window.localStorage.clear("token");
        window.sessionStorage.clear("authToken");
    })


export const postCompleted = createAsyncThunk("user/postCompleted",
    async (userData) => {
        const res = await axios.post(api_url, userData)
        // console.log("posting data: ",res);
        return res?.data;
    });


export const completed = createAsyncThunk("user/completed",
    async () => {
        const res = await axios.get(api_url)
        // console.log("fetching data: ",res);
        return res?.data;
    });


export const deleteCompleted = createAsyncThunk("user/deleteCompleted",
    async (id) => {
        const res = await axios.delete(`${api_url}/${id}`)
        // console.log("Delete response: ", res);
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


        builder.addCase(sign_up.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(sign_up.fulfilled, (state, action) => {
            // console.log("action:", action);
            if (action.payload.status === 200) {
                state.isLoading = false;
                state.status = action.payload.status;
                state.first_name = action.payload.data.first_name;
                state.last_name = action.payload.data.last_name;
                state.email = action.payload.data.email;
                state.message = action.payload.data.message;
                Swal.fire({
                    icon: 'success',
                    title: 'Your account has been created',
                    showConfirmButton: true,
                    timer: 1500
                });
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                });
            }
        })
        builder.addCase(sign_up.rejected, (state, action) => {
            // console.log("actions:", action);
            state.isLoading = false;
            state.create = [];
            state.error = action.error.message;
        })


        builder.addCase(sign_In.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(sign_In.fulfilled, (state, action) => {
            // console.log("action:", action);
            state.isLoading = false;
            state.status = action.payload.status;
            state.first_name = action.payload.data.first_name;
            state.last_name = action.payload.data.last_name;
            state.email = action.payload.data.email;
            state.message = action.payload.data.message;

            if (state.status === 200 && state.email === "skirfan7044@gmail.com") {
                window.localStorage.setItem("token", action.payload.token);
                state.isLoading = false;
                Swal.fire({
                    icon: 'success',
                    title: `Welcome back admin! ${state.first_name} ${state.last_name}`,
                    showConfirmButton: true,
                    timer: 2000
                });
            }
            else if (state.status === 200) {
                window.sessionStorage.setItem("authToken", action.payload.token);
                state.isLoading = false;
                Swal.fire({
                    icon: 'success',
                    title: `Welcome back! ${state.first_name} ${state.last_name}`,
                    showConfirmButton: true,
                    timer: 2000
                });
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Wrong userId or password!',
                });
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
                timer: 2000
            })
        })
        builder.addCase(logOut.rejected, (state, action) => {
            // console.log("Action: ", action);
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


export default UserSlice.reducer