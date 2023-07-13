const PASSWORD_REQUIREMENTS = [
  { re: /\d/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
];

function getPasswordStatus(password: string) {
  let multiplier = password.length > 5 ? 0 : 1;

  PASSWORD_REQUIREMENTS.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  const strength = Math.max(
    100 - (100 / (PASSWORD_REQUIREMENTS.length + 1)) * multiplier,
    10
  );

  let color = 'red';

  if (strength === 100) {
    color = 'teal';
  } else if (strength > 50) {
    color = 'yellow';
  }

  return { color, strength };
}

export { getPasswordStatus, PASSWORD_REQUIREMENTS };
