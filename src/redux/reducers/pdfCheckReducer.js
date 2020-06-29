import { PDF_CHECK } from '../actions/types';

const initialState = {
  checkPdf: {}
};

export const pdf_parse = (state = initialState, action) => {
  switch (action.type) {
    case PDF_CHECK:
      return {
        ...state,
        checkPdf: action.payload
      };
    default:
      return state;
  }
};
