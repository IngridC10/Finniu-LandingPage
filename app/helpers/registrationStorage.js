export const saveRegisterStorage = (data) => {
  localStorage.setItem('fullName',data.fullName);
  localStorage.setItem('email',data.email);
  localStorage.setItem('phoneNumber',data.phoneNumber);
  localStorage.setItem('phonePrefix',data.phonePrefix);
};

export const getRegisterStorage = () => {
  const fullName = localStorage.getItem('fullName');
  const email = localStorage.getItem('email');
  const phoneNumber = localStorage.getItem('phoneNumber');
  const phonePrefix = localStorage.getItem('phonePrefix');
  return {
    fullName,
    email,
    phoneNumber,
    phonePrefix
  };
}