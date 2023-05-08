export const checkEmail = (email) => {
 return email.includes("@"); 
};

const phoneNumberRegex = /^(\+0?1)?\(?\d{3}\)?\d{3}\d{4}$/;

export const checkPhone = (phone) => {
 return phoneNumberRegex.test(phone);
};
