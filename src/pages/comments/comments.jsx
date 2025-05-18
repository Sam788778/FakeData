import styles from './comments.module.css';

const Comments = ({comment}) => {
    return (
        <div className={styles.comments}>
            <h2>{comment.name}</h2>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
        </div>
    )
}

export default Comments;