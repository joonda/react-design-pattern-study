import { useEffect, useState } from "react";
import type {Post} from "../../types/post.ts";
import axios from "axios";

export const usePostList = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    const getPostList = async () => {
        await axios.get("http://localhost:3001/posts")
            .then(res => setPosts(res.data))
    }

    useEffect(() => {
        getPostList()
    }, [])

    return posts
}