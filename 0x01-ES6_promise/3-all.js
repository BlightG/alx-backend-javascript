import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  // try {
  //   uploadPhoto().then(
  //     (value) => {
  //       const body = value;
  //       createUser().then(
  //         (value) => { console.log(`${body.body} ${value.firstName} ${value.lastName}`); },
  //       );
  //     },
  //   );
  // } catch (error) {
  //   console.log('Signup system offline');
  // }
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
  } catch (err) {
    console.log('Signup system offline');
  }
}
