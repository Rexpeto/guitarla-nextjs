import Post from "./post";
import styles from "../styles/blog.module.css";

const ListadoPosts = ({ blogs }) => {
    return (
        <div className={styles.blog}>
            {blogs.map((post) => (
                <Post key={post.id} post={post?.attributes} />
            ))}
        </div>
    );
};

export default ListadoPosts;
