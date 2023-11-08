import { configureStore } from "@reduxjs/toolkit"
import cocktailSlices from "./features/cocktailSlices"

export default configureStore ({
    reducer:{
        app:cocktailSlices,
    }
})