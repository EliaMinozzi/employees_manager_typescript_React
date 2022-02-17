import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface setData{
    companyName:string,
        companyId: string,
        employees:setEmployees[]
}

interface setEmployees{
    name:string,
    surname:string,
    idEmployee:string,
    transfert: number,
}

interface DataState {
  data: setData[]
}

// Define the initial state using that type
const initialState: DataState = {
  data: [
    {
     companyName:'azienda1',
     companyId: '01',
     employees:[
        {
            name:'Gianluca',
            surname:'Palocchi',
            idEmployee:'00001',
            transfert: 2,
        },
        {
            name:'Giovanna',
            surname:'Perin',
            idEmployee:'00002',
            transfert: 5,
        },
        {
            name:'Ginevra',
            surname:'Pastrami',
            idEmployee:'00003',
            transfert: 10,
        },
    ],

    },
    {
        companyName:'azienda2',
        companyId: '02',
        employees:[
            {
            name:'Giacomo',
            surname:'Bolotti',
            idEmployee:'00004',
            transfert: 1,
            },
            {
            name:'Giancarlo',
            surname:'Monzini',
            idEmployee:'00005',
            transfert: 0,
            },
            {
            name:'Giorgia',
            surname:'Garolli',
            idEmployee:'00006',
            transfert: 7,
            },
        ],
    }
]
}

export const SliceActions = createSlice({
  name: 'dataSet',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    save: (state, action: PayloadAction<setData[]>) => {
      state.data = action.payload
    }
  }
})

export const { save } = SliceActions.actions

// Other code such as selectors can use the imported `RootState` type
export const selectData = (state: RootState) => state.data

export default SliceActions.reducer