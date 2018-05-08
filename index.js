const easter = require('easter');
const moment = require('moment');

function isHoliday(date){
	date = new Date(date);

	// Jours fixes
	// Nouvel An
	if (moment(date).format("MM-DD") === "01-01"){
		return true;
	}

	// 1er May
	if (moment(date).format("MM-DD") === "05-01"){
		return true;
	}

	// Capitulation 1945
	if (moment(date).format("MM-DD") === "05-08"){
		return true;
	}

	// Fête Nationale
	if (moment(date).format("MM-DD") === "07-14"){
		return true;
	}

	// Assomption
	if (moment(date).format("MM-DD") === "08-15"){
		return true;
	}

	// Toussaint
	if (moment(date).format("MM-DD") === "11-01"){
		return true;
	}

	// Armistice 1918
	if (moment(date).format("MM-DD") === "11-11"){
		return true;
	}

	// Noel
	if (moment(date).format("MM-DD") === "12-25"){
		return true;
	}

	// Jours mouvants
	const easterDate = easter(date);

	// Pâques
	if (moment(date).format("YYYY-MM-DD") === moment(easterDate).format("YYYY-MM-DD")){
		return true;
	}

	// Lundi de Pâques 
	// (Pâques + 1j)
	if (moment(date).format("YYYY-MM-DD") === moment(easterDate).add(1, 'days').format("YYYY-MM-DD")){
		return true;
	}

	// Ascension
	// (Pâques + 40j)
	if (moment(date).format("YYYY-MM-DD") === moment(easterDate).add(39, 'days').format("YYYY-MM-DD")){
		return true;
	}

	// Pentecôte
	// (Pâques + 50j)
	if (moment(date).format("YYYY-MM-DD") === moment(easterDate).add(49, 'days').format("YYYY-MM-DD")){
		return true;
	}

	// Lundi de Pentecôte
	// (Pâques + 50j)
	if (moment(date).format("YYYY-MM-DD") === moment(easterDate).add(50, 'days').format("YYYY-MM-DD")){
		return true;
	}


	return false;
}

module.exports = isHoliday;