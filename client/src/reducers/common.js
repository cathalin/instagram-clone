import {
  GET_PREVIEW,
  RESET_VALUE,
  SUBMIT_NEW_POST,
  EDIT_POST
} from "../constants/action-types";

const initialState = {
  prevew: "",
  imagePreviewError: "",
  submitted: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PREVIEW:
      if (action.payload.message) {
        return {
          imagePreviewError: action.payload.message
        };
      }
      return {
        preview: action.payload
      };
    case RESET_VALUE:
      return {
        preview: action.payload,
        imagePreviewError: action.payload
      };
    case SUBMIT_NEW_POST:
      return {
        submitted: action.payload
      };
    case EDIT_POST:
      return {
        imagePreviewError: action.payload
      };
    default:
      return state;
  }
}