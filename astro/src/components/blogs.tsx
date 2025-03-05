
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface BlogsProps {
  posts: Post[];
}

const Blogs: React.FC<BlogsProps> = ({ posts }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <ul className="grid grid-cols-2 gap-5">
        {posts.map((post) => (
          <li
            key={post.id}
            className="p-6 bg-white rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            <a
              href={`/blog/${post.id}`}
              className="text-2xl font-semibold text-blue-800 hover:underline"
            >
              {post.title}
            </a>
            <p className="mt-2 text-gray-700">
              {post.body.substring(0, 100)}...
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
