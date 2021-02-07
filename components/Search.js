import { useState } from 'react';
import styles from '../styles/Search.module.css';

const options = [
	'Visakhapatnam',
	'Surat',
	'Chennai',
	'Hyderabad',
	'Pune',
	'Bangalore',
	'Kolkata',
	'Mumbai',
	'Delhi',
	'Kanpur'
];

const Search = () => {
	const [searchData, handleSearch] = useState('');
	const [showOptions, handleShowOptions] = useState(false);
	const [filteredOptions, handleFilteredOptions] = useState([]);
	const [activeOption, handleActiveOptions] = useState(0);
	const [focused, handleFocused] = useState(false);

	function onChange(e) {
		const filteredOptions = options.filter(
			optionName => optionName.toLowerCase().indexOf(searchData.toLowerCase()) > -1
		);
		handleSearch(e.target.value);
		handleShowOptions(true);
		handleActiveOptions(0);
		handleFilteredOptions(filteredOptions);
	}

	function onKeyDown(e) {
		if (e.keyCode === 13) {
			handleSearch(filteredOptions[activeOption]);
			handleShowOptions(false);
			handleActiveOptions(0);
		} else if (e.keyCode === 38 && activeOption !== 0) {
			handleActiveOptions(activeOption - 1);
		} else if (e.keyCode === 40 && activeOption !== filteredOptions.length - 1) {
			handleActiveOptions(activeOption + 1);
		}
	}

	function handleBlur() {
		handleFocused(false);
	}

	function resetOptionDropdown() {
		handleShowOptions(false);
		handleActiveOptions(0);
		handleFilteredOptions([]);
	}

	function clickOption(e) {
		handleSearch(e.currentTarget.innerText);
		resetOptionDropdown();
	}

	function optionList() {
		if (showOptions && searchData) {
			if (filteredOptions.length) {
				return (
					<ul className={styles.options}>
						{filteredOptions.map((optionName, index) => (
							<li
								className={index === activeOption ? styles.option_active : ''}
								key={optionName}
								onClick={clickOption}
							>
								{optionName}
							</li>
						))}
					</ul>
				);
			} else {
				return (
					<ul className={styles.options}>
						<li className={styles.no_options}>
							<em>No Option!</em>
						</li>
					</ul>
				);
			}
		}
	}

	return (
		<div
			className={`${styles.search_box} ${focused ? styles.search_box_focus : ''}`}
		>
			<input
				className={styles.input_box}
				value={searchData}
				onChange={onChange}
				onKeyDown={onKeyDown}
				onFocus={() => handleFocused(true)}
				onBlur={handleBlur}
				placeholder="Type location"
			/>
			{optionList()}
			<button className={styles.search_btn}>
				<img src="/search.svg" alt="search_icon" />
			</button>
		</div>
	);
};

export default Search;
