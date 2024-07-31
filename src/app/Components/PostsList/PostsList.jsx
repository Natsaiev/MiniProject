import { useState } from "react";
import s from './PostsList.module.scss';
import { useEffect } from "react";
import { fetchPosts } from "../../../api/api";
import { Post } from "./Post";

export const PostsList = () => {

const [posts, setPosts] = useState([])
const [error, setError] = useState(false)
const [page, setPage] = useState(1);


useEffect(() => {
    fetchPosts(page)
    .then((res) => setPosts(res))
    .catch(() => setError(true));
}, [page]);

return (

<div className={s.postList}>
    <h1>Список постов</h1>
    <div className={s.postList__container}> 
        {posts.map(post => 
          <Post key={post.id} post={post} />
    )}   
    </div>
    <button onClick={() => setPage(page +1)} className={s.postList__btn}>Далее</button> 
</div>

)

}