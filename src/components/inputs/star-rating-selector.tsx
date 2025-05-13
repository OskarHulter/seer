import styles from './styles.module.scss'

export function StarRatingSelector() {
  return (
    <>
      <label htmlFor="rating">Rating</label>
      <input className={styles.starRatingInput} id="rating" name="rating" type="range" min="1" value="2" max="5" />
    </>
  )
} 
