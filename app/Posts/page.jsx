import Link from "next/link";
import LikeButton from "./LikeButton";

const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
};

export default async function PostsPage() {
  const posts = await fetchPosts();
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href="/Posts/[id]" as={`/Posts/${post.id}`}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </Link>

          <LikeButton />
        </div>
      ))}
    </div>
  );
}
