import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Abdulaziz alhayyani',
    email: 'Aziz@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Sara Flan',
    email: 'sara@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
