import type {Post} from "../../types/post.ts";

interface PostListPresentationProps {
    posts: Post[]
}

const PostListPresentation = ({ posts }: PostListPresentationProps) => {
    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    {post.id} - {post.title} - {post.author}
                </div>
            ))}
        </div>
    )
}

export default PostListPresentation;