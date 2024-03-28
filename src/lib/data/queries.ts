type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type RandomAuthor = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

const getPosts = async (): Promise<Array<Post>> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const getAuthors = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = (await res.json()) as Array<RandomAuthor>;
  return data.map(({ id, name }) => ({ id, name }));
};

export const getPostsWithAuthor = async () => {
  const [posts, authors] = await Promise.all([getPosts(), getAuthors()]);
  return posts.map((post) => ({
    id: post.id,
    title: post.title,
    body: post.body,
    author: authors.find(({ id }) => id === post.userId)?.name,
  }));
};

export type PostWithAuthor = Awaited<
  ReturnType<typeof getPostsWithAuthor>
>[number];
