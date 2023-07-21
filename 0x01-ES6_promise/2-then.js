export default async function handleResponseFromAPI(promise) {
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
  try {
    const val = await promise;
    return val;
  } catch (err) {
    return new Error();
  } finally {
    console.log('Got a response from the API');
  }
}
