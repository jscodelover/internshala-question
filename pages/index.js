import { useState } from 'react';
import Search from '../components/Search';
import Filter from '../components/Filter';
import Card from '../components/Card';
import CardDetail from '../components/CardDetail';
import { cards } from '../data/cardData';
import styles from '../styles/Home.module.css';

const Home = () => {
	const [showCardId, handleShowCard] = useState('');
	return (
		<>
			<div className={styles.action_box}>
				<div className={`${styles.wrapper} ${styles.home_wrapper}`}>
					<Search />
					<Filter />
				</div>
			</div>

			<article className={`${styles.home_wrapper} ${styles.wrapper}`}>
				<section className={styles.card_section}>
					{cards.map(card => (
						<Card key={card.id} {...card} handleView={id => handleShowCard(id)} />
					))}
				</section>
				<section className={styles.map_section}>
					{showCardId && (
						<CardDetail
							cardInfo={cards.find(card => card.id === showCardId) || {}}
							handleClick={() => handleShowCard('')}
						/>
					)}
					<div className={styles.map}>
						<img src="/map.png" alt="map" />
					</div>
				</section>
			</article>
		</>
	);
};
export default Home;
