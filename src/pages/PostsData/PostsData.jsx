import styles from './PostsData.module.css';

const PostsData = ({ post }) => {
    return (
        <div className={styles.PostsData}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}

export default PostsData;