import {useState} from 'react';

const daysShortArray = [
	'Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
];

const monthNamesArray = [
	'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
];

const useCalendar = (daysShort = daysShortArray, monthNames = monthNamesArray) => {
	const today2 = new Date();
	const today = new Date(2023, 0, 1);
	// console.log(today)
	const todayFormatted2 = `${today.getDate()}-${today.getMonth() +1}-${today.getFullYear()}`
	const todayFormatted = `1-1-2023`
	const daysInWeek = [0, 1, 2, 3, 4, 5, 6];
	const [selectedDate, setSelectedDate] = useState(today);
	const selectedMonthLastDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
	const prevMonthlastDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 0);
	const daysInMonth = selectedMonthLastDate.getDate();
	const firstDayInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();
	const startingPoint = daysInWeek.indexOf(firstDayInMonth) +1;
	let prevMonthStartingPoint = prevMonthlastDate.getDate() - daysInWeek.indexOf(firstDayInMonth) +1;
	let currentMonthCounter = 1;
	let nextMonthCounter = 1;
	const rows = 6;
	const cols = 7;
	const calendarRows={};

	for(let i =1; i < rows +1 ; i++){
		for(let j = 1; j <cols +1; j++ ){
			if(!calendarRows[i]){
				calendarRows[i] = [];
			}

			if (i === 1){
				if(j < startingPoint) {
					calendarRows[i] = [...calendarRows[i], {
						classes: 'in-prev-month',
						date: `${prevMonthStartingPoint}-${selectedDate.getMonth() === 0 ? 12 : selectedDate.getMonth()}-${selectedDate.getMonth() === 0 ? selectedDate.getFullYear() - 1 : selectedDate.getFullYear()}`,
						value: prevMonthStartingPoint
					}];
					prevMonthStartingPoint++;
				} else {
					calendarRows[i] = [...calendarRows[i], {
						classes: '',
						date: `${currentMonthCounter}-${selectedDate.getMonth() +1}-${selectedDate.getFullYear()}`,
						value: currentMonthCounter
					}];
					currentMonthCounter++
				}
			} else if (i > 1 && currentMonthCounter < daysInMonth + 1 ) {
				calendarRows[i] = [...calendarRows[i], {
					classes:'',
					date: `${currentMonthCounter}-${selectedDate.getMonth() +1}-${selectedDate.getFullYear()}`,
					value: currentMonthCounter
				}]
				currentMonthCounter++
			} else {
				calendarRows[i] = [...calendarRows[i], {
					classes: 'in-next-month',
					date: `${nextMonthCounter}-${selectedDate.getMonth() + 2 === 13 ? 1 : selectedDate.getMonth() +2}-${selectedDate.getMonth() +2 === 13 ? selectedDate.getFullYear() +1 : selectedDate.getFullYear()}`,
					value: nextMonthCounter
				}]
				nextMonthCounter++
			}
		}
	}

	const getPrevMonth = () => {
		setSelectedDate(prevValue => new Date(prevValue.getFullYear(), prevValue.getMonth() -1, 1));
	}

	const getNextMonth = () => {
		setSelectedDate(prevValue => new Date(prevValue.getFullYear(), prevValue.getMonth() +1, 1));
	}

	return {
		daysShort,
		monthNames,
		todayFormatted,
		todayFormatted2,
		calendarRows,
		selectedDate,
		getPrevMonth,
		getNextMonth
	}

}

export default useCalendar;