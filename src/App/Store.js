import { configureStore } from "@reduxjs/toolkit";

import mailReducer from "../features/MailSlice.js";

export default configureStore({
  reducer: {
    mail: mailReducer,
  },
});
