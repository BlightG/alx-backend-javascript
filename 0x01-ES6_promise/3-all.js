import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  // const bodytag = uploadPhoto();
  // const user = createUser();
  // console.log(bodytag.body);
  // console.log(user)
  try {
    uploadPhoto().then(
      (value) => { process.stdout.write(value.body); },
    );
    createUser().then(
      (value) => { console.log(` ${value.firstName} ${value.lastName}`); },
    );
  } catch (error) {
    console.log('Signup system offline');
  }
}
