import { configureStore } from "@reduxjs/toolkit"
import fieldsData from "./fieldsData";


const store =configureStore({
    reducer:{
        field:fieldsData
        


    }
});

export default store