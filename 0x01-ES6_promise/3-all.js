import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  try {
    uploadPhoto().then(
      (value) => {
        const body = value;
        createUser().then(
          (value) => { console.log(`${body.body} ${value.firstName} ${value.lastName}`); },
        );
      },
    );
  } catch (error) {
    console.log('Signup system offline');
  }
}
