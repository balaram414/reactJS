import {configureStore} from '@reduxjs/toolkit'
import counterSclice from './counterSlice'

export const store=configureStore({
    reducer:{counter:counterSclice}
})
