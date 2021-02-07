import Star from './Star';
import styles from '../styles/CardDetail.module.css';
import cardStyles from '../styles/Card.module.css';

const CardDetail = props => {
	const {
		title,
		company_name,
		company_logo,
		star,
		location,
		money,
		posted,
		period,
		about_company,
		about_internship,
		skills,
		apply_condition
	} = props.cardInfo;

	return (
		<div className={styles.model_wrapper}>
			<button className={styles.close_btn} onClick={props.handleClick}>
				<img src="cross-white.svg" alt="cross" />
			</button>
			<button className={styles.back_btn} onClick={props.handleClick}>
				<img src="arrow-left.svg" alt="arrow-left" />
			</button>
			<div className={styles.model_content}>
				<h6 className={cardStyles.title}>{title}</h6>
				<p className={cardStyles.company_name}>{company_name}</p>
				<div className={cardStyles.stars}>
					<Star selected={star >= 1} />
					<Star selected={star >= 2} />
					<Star selected={star >= 3} />
					<Star selected={star >= 4} />
					<Star selected={star >= 5} />
				</div>
				<span className={cardStyles.company_logo}>
					<img src={`${company_logo}.svg`} alt={company_logo} />
				</span>
				<p>
					<img src="location.svg" alt="location" />
					{location}
				</p>
				<div className={styles.more_info}>
					<div>
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
				</div>
				<p className={styles.heading}>About the company</p>
				<p className={styles.company_txt}>{about_company}</p>
				<p className={styles.heading}>About the internship</p>
				<ul className={styles.list}>
					{about_internship.map((point, index) => (
						<li key={`pt${index}`}>{point}</li>
					))}
				</ul>
				<p className={styles.heading}>Skills required</p>
				<p className={styles.skills}>
					{skills.map(skill => (
						<span key={skill}>{skill}</span>
					))}
				</p>
				<p className={styles.heading}>Who can apply</p>
				<p>Only those candidates can apply who:</p>
				<ol className={styles.list}>
					{apply_condition.map((point, index) => (
						<li key={`pt${index}`}>{point}</li>
					))}
				</ol>
			</div>
			<div className={styles.submit_action_wrapper}>
				<div className={styles.submit_action_content}>
					<div className={styles.share}>
						<button className={cardStyles.bookmark_btn}>
							<img src="bookmark.svg" alt="bookmark" />
						</button>
						<button>
							<img src="share.svg" alt="share" />
						</button>
					</div>
					<button className={styles.apply_btn} onClick={props.handleClick}>
						Apply now
					</button>
				</div>
			</div>
		</div>
	);
};

export default CardDetail;
