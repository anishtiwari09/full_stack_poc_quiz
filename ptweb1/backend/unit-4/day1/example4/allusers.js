const user = ["Nrupal", "aman", "albert", "yogesh"];
function addUsers(users, name) {
  users.push(name);
  return users;
}


const getAllUsers = (page=1) => {
    const start=(page-1)*3
const end=start+3
  return user.slice(start,end);
};

const getUser = (index) => {
  if (index >= 0 && index < user.length) return user[index];
  else return "user not defined";
};

module.exports = {
  addUsers,
  getAllUsers,
  getUser,
  user
};
