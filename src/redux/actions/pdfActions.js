import { PDF_CHECK } from './types';

export const checkPdf = (pdfPO, pdfPR) => (dispatch, getState) => {
  
  const apiUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_BACKEND : process.env.REACT_APP_DEV_BACKEND;

  const loginStatus = getState()['account']['loginStatus'];

  var formData = new FormData();
  formData.append("PDF_PO", pdfPO);
  formData.append("PDF_PR", pdfPR);

  return fetch(apiUrl + 'api/pdf/parse', {
      method: 'POST',
      headers: (loginStatus.token != '')? {'Authorization': 'Token ' + loginStatus.token}: {},
      body: formData
  })
  .then(res => {
    if (res.status >= 400) {
      throw new Error("Backend Error with Status \"" + res.statusText + "\"");
    }
    return res.json();
  })
  .then(result => {
      if(result.status){
        dispatch({
          type: PDF_CHECK,
          payload: result
        });
      }else{
        dispatch({
          type: PDF_CHECK,
          payload: result
        });
      }
  })
  .catch(err => {
    dispatch({
      type: PDF_CHECK,
      payload: {
        'status': false,
        'message': 'Backend Error Occured'
      }
    });
  });
};
