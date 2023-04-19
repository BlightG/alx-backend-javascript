import signUpUser from "./4-user-promise";
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
  //   .then(
  //     (values) => { console.log(values); },
  //     error => console.log(error))

  return [signUpUser(firstName, lastName), uploadPhoto(fileName)]

  // console.log(fileName);
  // console.log(lastName);
  // console.log(firstName);
}