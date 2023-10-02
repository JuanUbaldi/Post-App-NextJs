import Link from "next/link";

const fetchComments = (id) => {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  ).then((res) => res.json());
};

export default async function Post({ params }) {
  const { id } = params;
  const comments = await fetchComments(id);
  return (
    <ul style={{background:"#444", fontsize:"12px"}}>
      {comments.map((comment) => (
        <li key={comment.id}>
          <h4>{comment.title}</h4>

          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  );
}
