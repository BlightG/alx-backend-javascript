export default function handleResponseFromAPI(promise) {
  // return new Promise((resolve, reject) => {
  //   console.log('Got a response from the API');
  //   if (promise) {
  //     resolve(
  //       {
  //         status: 200,
  //         body: 'success',
  //       },
  //     );
  //   } else {
  //     reject(Error());
  //   }
  // });
  promise.then(() => {
    return ({
      status: 200,
      body: 'success'
    });
  }).catch(() => Error(''));
  console.log('Got a response from the API');

}
