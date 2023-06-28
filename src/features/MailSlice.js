import { createSlice } from "@reduxjs/toolkit";

export const MailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMessageisOpen: false,
  },
  reducers: {
    openSendmessages: (state) => {
      state.sendMessageisOpen = true;
    },
    CloseSendmessages: (state) => {
      state.sendMessageisOpen = false;
    },
  },
});

export const { openSendmessages, CloseSendmessages } = MailSlice.actions;
export const SelectsendMessageOpen = (state) => state.mail.sendMessageisOpen;

export default MailSlice.reducer;
