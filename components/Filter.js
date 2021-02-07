import { useState, useReducer, Fragment } from 'react';
import Select, { components } from 'react-select';
import styles from '../styles/Filter.module.css';

const locations = ['5km', '20km', '50km', '100km', '300km', 'All'];

const intershipType = ['All', 'In office', 'Remote', 'Part time'];

const highlights = ['Top Rated', 'Startups', 'High stipened', 'Dream'];

const interestData = [
	{ label: 'Architecture', value: 'Architecture' },
	{ label: 'Commerce', value: 'Commerce' },
	{ label: 'Graphic Design', value: 'Graphic Design' },
	{ label: 'Engineering', value: 'Engineering' },
	{ label: 'Game Development', value: 'Game Development' },
	{ label: 'Mobile App Development', value: 'Mobile App Development' },
	{ label: 'Digital Marketing', value: 'Digital Marketing' },
	{ label: 'Media', value: 'Media' },
	{ label: 'Journalism', value: 'Journalism' },
	{ label: 'Others', value: 'Others' }
];

const customStyles = {
	placeholder: base => ({
		...base,
		color: 'rgba(0, 0, 0, 0.25)'
	}),
	menuList: base => ({
		...base,
		boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.08)'
	}),
	option: (base, state) => ({
		...base,
		color: state.isSelected || state.isFocused ? '#008bdc;' : '#666',
		backgroundColor: state.isSelected
			? '#eafcff;'
			: state.isFocused
			? 'transparent'
			: base.backgroundColor
	})
};

function updateInterest(state, action) {
	switch (action.type) {
		case '1':
			return { ...state, type1: action.data };
		case '2':
			return { ...state, type2: action.data };
		case '3':
			return { ...state, type3: action.data };
		case '4':
			return { type1: null, type2: null, type3: null };
		default:
			return state;
	}
}

const Filter = () => {
	const [openFilter, handleFilter] = useState(false);
	const [location, handleLocation] = useState('');
	const [intership, handleInternship] = useState('');
	const [highlight, handleHighlight] = useState('');
	const [interest, handleInterest] = useReducer(updateInterest, {
		type1: undefined,
		type2: undefined,
		type3: undefined
	});

	function handleClear() {
		handleLocation('');
		handleInternship('');
		handleHighlight('');
		handleFilter(false);
		handleInterest({ type: '4' });
	}

	return (
		<>
			<button className={styles.filter_btn} onClick={() => handleFilter(true)}>
				<img src="filter.svg" alt="filter_icon" />
				Filters
			</button>
			<div
				className={`${styles.filter_wrapper} ${
					openFilter ? styles.show_filter : styles.hide_filter
				}`}
			>
				<div className={styles.filter_content}>
					<div className={styles.filter_header}>
						<h4>Filters</h4>
						<button onClick={() => handleFilter(false)}>
							<img src="/cross.svg" alt="cross.svg" />
						</button>
					</div>
					<p>Locations</p>
					<div className={`${styles.filter_tabs} ${styles.location}`}>
						{locations.map((loc, index) => (
							<Fragment key={index}>
								<input
									id={`loc${loc}`}
									type="radio"
									name="location"
									onChange={() => handleLocation(loc)}
									checked={location === loc}
								/>
								<label htmlFor={`loc${loc}`}>{loc}</label>
							</Fragment>
						))}
					</div>
					<p>Type of internships</p>
					<div className={`${styles.filter_tabs} ${styles.internship}`}>
						{intershipType.map((inter, index) => (
							<Fragment key={index}>
								<input
									id={`inter${inter}`}
									type="radio"
									name="intership"
									onChange={() => handleInternship(inter)}
									checked={intership === inter}
								/>
								<label htmlFor={`inter${inter}`}>{inter}</label>
							</Fragment>
						))}
					</div>
					<p>Fields of interest</p>
					<Select
						className={styles.interest_dropdown}
						options={interestData}
						isSearchable={false}
						isClearable={true}
						components={{
							IndicatorSeparator: () => null,
							DropdownIndicator: () => null
						}}
						value={interest.type1}
						onChange={val => handleInterest({ type: '1', data: val })}
						placeholder="Choose your first preference"
						styles={customStyles}
						theme={theme => ({
							...theme,
							colors: {
								...theme.colors,
								primary: '#008bdc'
							}
						})}
					/>
					<Select
						className={styles.interest_dropdown}
						options={interestData}
						isSearchable={false}
						isClearable={true}
						components={{
							IndicatorSeparator: () => null,
							DropdownIndicator: () => null
						}}
						value={interest.type2}
						onChange={val => handleInterest({ type: '2', data: val })}
						placeholder="Choose your second preference"
						styles={customStyles}
						theme={theme => ({
							...theme,
							colors: {
								...theme.colors,
								primary: '#008bdc'
							}
						})}
					/>
					<Select
						className={styles.interest_dropdown}
						options={interestData}
						isSearchable={false}
						isClearable={true}
						components={{
							IndicatorSeparator: () => null,
							DropdownIndicator: () => null
						}}
						value={interest.type3}
						onChange={val => handleInterest({ type: '3', data: val })}
						placeholder="Choose your third preference"
						styles={customStyles}
						theme={theme => ({
							...theme,
							colors: {
								...theme.colors,
								primary: '#008bdc'
							}
						})}
					/>
					<p>Highlights</p>
					<div className={`${styles.filter_tabs} ${styles.highlight}`}>
						{highlights.map((point, index) => (
							<Fragment key={index}>
								<input
									id={`point${point}`}
									type="radio"
									name="highlight"
									onChange={() => handleHighlight(point)}
									checked={highlight === point}
								/>
								<label htmlFor={`point${point}`}>{point}</label>
							</Fragment>
						))}
					</div>
					<div className={styles.filter_action_btn}>
						<button onClick={handleClear}>Clear all</button>
						<button
							className={styles.filter_apply}
							onClick={() => handleFilter(false)}
						>
							Apply filters
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Filter;
