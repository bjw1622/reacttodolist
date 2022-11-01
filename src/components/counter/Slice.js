import{createSlice} from '@reduxjs/toolkit'

//작은 store
const counterSlice = createSlice({
    name:'counterSlice',
    initialState:{value:0},
    reducers:{
      // action
      up:(state,action)=>{
        state.value= state.value + action.payload;
      }
    }
  });
  

export const counterReducer = counterSlice.reducer
export const counterAction = counterSlice.actions