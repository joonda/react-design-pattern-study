import {useEffect, useState} from "react";
import type {Post} from "../../types/post.ts";
import axios from "axios";
import PostListPresentation from "./PostListPresentation.tsx";

const PostListContainer = () => {
    const [list, setList] = useState<Post[]>([]);

    const getPostList = async () => {
        await axios.get<Post[]>("http://localhost:3001/posts")
            .then(res => setList(res.data));
    }

    useEffect(() => {
        getPostList();
    }, [])

    return <PostListPresentation posts={list} />
}

export default PostListContainer;