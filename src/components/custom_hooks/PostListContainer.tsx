import {usePostList} from "./usePostList.ts";
import PostListPresentation from "./PostListPresentation.tsx";

const PostListContainer = () => {
    const postList = usePostList()

    return <PostListPresentation posts={postList} />
}

export default PostListContainer;

