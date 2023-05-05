const checkMail = (email) => {
  return email.toString().includes("@")
};

const userName = () => {
  return (
      <input type="text" />
    );
};

module.exports = {
  checkMail,
  userName
};
