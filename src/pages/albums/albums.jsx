import styles from './albums.module.css';

const Albums = ({album}) => {
    return (
        <div className={styles.albums}>
            <h2 className={styles.albumTitle}>{album.title}</h2>
        </div>
    );
}

export default Albums;