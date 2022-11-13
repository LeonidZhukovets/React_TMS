import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardType } from "../../constants/@types";

type imageReducerState = {
  selectedImage: CardType["image"] | null;
  isSelectedImageModalOpened: boolean;
};

const initialState: imageReducerState = {
  selectedImage: null,
  isSelectedImageModalOpened: false,
};

const imageSlice = createSlice({
  name: "imageReducer",
  initialState,
  reducers: {
    setSelectedImage: (
      state,
      action: PayloadAction<CardType["image"] | null>
    ) => {
      state.selectedImage = action.payload;
      state.isSelectedImageModalOpened = true;
    },
    setSelectedImageModalVisible: (state, action: PayloadAction<boolean>) => {
      state.isSelectedImageModalOpened = action.payload;
      if (!action.payload) {
        state.selectedImage = null;
      }
    },
  },
});

export const { setSelectedImage, setSelectedImageModalVisible } =
  imageSlice.actions;

const imageReducer = imageSlice.reducer;
export default imageReducer;
