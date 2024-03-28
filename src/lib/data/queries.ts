const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

type Post = {
  userId: string;
  id: number;
  title: string;
  body: string;
};

const getAuthors = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data.map(({ id, name }) => ({ id, name }));
};

type Autor = {
  id: number;
  name: string;
};

export const getPostsWithAuthor = async () => {
  const [posts, authors] = await Promise.all([getPosts(), getAuthors()]);
  return posts.map((posts) => ({
    id: posts.id,
    title: posts.title,
    body: posts.body,
    author: authors.find(({ id }) => id === posts.userId)?.name,
  }));
};

export type PostWithAuthor = Omit<Post, "userId"> & { author: string };
