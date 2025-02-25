import {configureStore} from '@reduxjs/toolkit'
import countSlice from '../reducer/reslicea'
export default configureStore ({
    reducer : {
        counterz : countSlice,
    },
})
