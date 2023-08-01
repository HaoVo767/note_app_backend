const author = {
  name: "Hao",
  id: 123,
};
const folders = [
  {
    id: 1,
    name: "first",
    createdAt: "2020",
    authorId: 123,
  },
  {
    id: 2,
    name: "second",
    createdAt: "2021",
    authorId: 123,
  },
  {
    id: 2,
    name: "third",
    createdAt: "2021",
    authorId: 2,
  },
];

module.exports = { folders, author };
