export default function validateInfo(values) {

  let errors = {};

  if (!values.firstName?.trim()) {
    errors.firstName = 'Name  required';
  }

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.lastName?.trim()) {
    errors.lastName = 'Last name  required';
  }

  if (!values.phone) {
    errors.phone = 'Phone required';
  } else if (!/^\d{7,14}$/.test(values.phone)) {
    errors.phone = 'Must have a range of 7 to 14 numbers';
  }

  if (!values.message) {
  
    errors.message = 'must contain a message'
  }
  return errors;
}


