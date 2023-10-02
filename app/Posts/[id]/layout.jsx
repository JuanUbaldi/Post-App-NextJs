import Link from "next/link";

const fetchSinglePosts = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
    res.json()
  );
};

export default async function Post({ children, params }) {
  const { id } = params;
  const post = await fetchSinglePosts(id);
  return (
    <div>
      <h2>{post.title}</h2>

      <p>{post.body}</p>
      <Link href={`/Posts/${id}/comments`}>ver comentarios </Link>
      {children}
    </div>
  );
}
