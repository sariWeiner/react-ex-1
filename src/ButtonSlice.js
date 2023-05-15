import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

export const fetchAllImges = createAsyncThunk(
    'toyInslice/getAlltoys' , async(thunkAPI)=> {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
        return response.data;
    }
)



const initialState  = {
    status: 'idle',
    imgArr: []
}

const ButtonSlice = createSlice({
    name:"imgInSlice",
    initialState,
    reducers: {
        // addToy:(state,action) => {
        // //    action.payload.id=state.toysArr[state.toysArr.length-1].id+1;
        //    state.toysArr.push(action.payload)
        // },

    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllImges.fulfilled,(state,action)=>{
            state.imgArr=action.payload
            state.status="fulfilled"
        }).addCase(fetchAllImges.rejected ,(state,action)=>{
            state.status="error"
        }).addCase(fetchAllImges.pending,(state , action)=>{
            state.status="pending"
        })
    }
});

    // export const {addToy} = ToySlice.actions;
    export default ButtonSlice.reducer;



