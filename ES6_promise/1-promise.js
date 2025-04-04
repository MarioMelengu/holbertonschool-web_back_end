/* eslint-disable */
export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
      const isApiSuccess = true;
      if (isApiSuccess) {
        resolve({status: 200, body: 'Success'});
      } else {
        reject(new Error('The fake API is not working currently'));
      }
    });
  }
