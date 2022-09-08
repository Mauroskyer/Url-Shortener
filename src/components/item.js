import style from './item.module.css';

export default function Item({ item }) {
  return (
    <div className={style.itemContainer}>
      <div className={style.itemInfoContainer}>
        <span className={style.itemInfoTag}>URL:</span>
        <span>{item.url} </span>
      </div>

      <div className={style.itemInfoContainer}>
        <span className={style.itemInfoTag}>Short URL:</span>
        <span>
          <a
            href={`http://localhost:300/u/${item.shortUrl}`}
            target="_blank"
            rel="noreferrer"
          >
            http://localhost:300/u/{item.shortUrl}
          </a>
        </span>
      </div>

      <div className={style.itemInfoContainer}>
        <span className={style.itemInfoTag}>Views:</span>
        <span>{item.views} views</span>
      </div>
    </div>
  );
}
