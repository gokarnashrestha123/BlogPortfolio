import { configureStore } from "@reduxjs/toolkit";
import BlogReducer from "../feature/Blog/BlogSlice";
import worksReducer from "../feature/Works/WorkSlice";

export const store = configureStore({
  reducer: {
    // add slices here
    blog: BlogReducer,
    works: worksReducer,
  },
});
