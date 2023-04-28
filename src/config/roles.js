const allRoles = {
  STUDENT: [],
  ADMIN: [],
  INSTRUCTOR: [],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
