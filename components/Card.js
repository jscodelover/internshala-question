import Star from './Star';
import styles from '../styles/Card.module.css';

const Card = props => {
	const {
		id,
		title,
		company_name,
		company_logo,
		star,
		location,
		money,
		posted,
		period,
		handleView
	} = props;
	return (
		<section className={styles.card}>
			<h6 className={styles.title}>{title}</h6>
			<p className={styles.company_name}>{company_name}</p>
			<div className={styles.stars}>
				<Star selected={star >= 1} />
				<Star selected={star >= 2} />
				<Star selected={star >= 3} />
				<Star selected={star >= 4} />
				<Star selected={star >= 5} />
			</div>
			<span className={styles.company_logo}>
				<img src={`${company_logo}.svg`} alt={company_logo} />
			</span>
			<p>
				<img src="location.svg" alt="location" />
				{location}
			</p>
			<div className={styles.info_salary}>
				<p>
					<img src="money.svg" alt="money" />
					{money}
				</p>
				<p>
					<img src="period.svg" alt="period" />
					{period}
				</p>
			</div>
			<p>
				<img src="time.svg" alt="time" />
				{posted}
			</p>
			<div className={styles.card_action_wrapper}>
				<div>
					<button className={styles.bookmark_btn}>
						<img src="bookmark.svg" alt="bookmark" />
					</button>
					<button>
						<img src="share.svg" alt="share" />
					</button>
				</div>
				<button className={styles.detail_btn} onClick={() => handleView(id)}>
					View details <img src="right-arrow.svg" alt="right-arrow" />
				</button>
			</div>
		</section>
	);
};

export default Card;
