const checkMail = (email) => {
  return email.toString().includes("@")
};

const userName = () => <input type="text" />;

module.exports = {
  checkMail,
  userName
};
