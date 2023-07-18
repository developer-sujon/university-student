const obj = {
  studentID: {
    name: 'test11',
    email: 'test11@gmail.com',
    id: '644eba81d5ff682af8f6e9d0',
  },
  coursesID: {
    allowSessions: ['CS2019', '2018', '2022'],
    coursesCode: '1234',
    coursesName: 'OS',
    coursesInstructor: 'ABC',
    seatsLimit: 100,
    id: '644eba4ad5ff682af8f6e9c1',
  },
  createdAt: '2023-04-fffff30T18:59:33.919Z',
  updatedAt: '2023-04-30T18:59:33.919Z',
  id: '644eba95d5ff682af8f6e9de',
};

const newb = Object.assign(
  {},
  ...(function _flatten(o) {
    return [].concat(...Object.keys(o).map((k) => (typeof o[k] === 'object' ? _flatten(o[k]) : { [k]: o[k] })));
  })(obj)
);

console.log(newb);
