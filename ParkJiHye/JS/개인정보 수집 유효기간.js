//2023 KAKAO BLIND RECRUITMENT - 개인정보 수집 유효기간

function solution(today, terms, privacies) {
	const perMonth = 28;
	const [Tyear, Tmonth, Tday] = today.split('.').map(Number);
    
	const termObj = terms.reduce((res, item) => {
		const [kind, duration] = item.split(' ');
		res[kind] = parseInt(duration);
		return res;
	}, {});

	const p_split = privacies.map((p) => p.split(/\.| /));

	const validityDate = p_split.map((p) => {
		let [year, month, day, kind] = [...p];
		const duration = termObj[kind];

		year = parseInt(year);
		month = parseInt(month);
		day = parseInt(day);

		const after = month + duration;
		const afterYear = parseInt(after / 12);
		const afterMonth = after % 12;

		if (after > 12) {
			year += afterYear;
			month = afterMonth;
			if (month === 0) {
				year--;
				month = 12;
			}
		} else {
			month = after;
		}

		if (day === 1) {
			month--;
			day = perMonth;
		} else {
			day--;
		}
		return [year, month, day];
	});

	const result = validityDate.reduce((acc, cur, idx) => {
		const [Vyear, Vmonth, Vday] = [...cur];

		if (Vyear < Tyear) {
			acc.push(idx + 1);
		} else if (Vyear === Tyear) {
			if (Vmonth < Tmonth) {
				acc.push(idx + 1);
			} else if (Vmonth === Tmonth) {
				if (Vday < Tday) {
					acc.push(idx + 1);
				}
			}
		}
		return acc;
	}, []);

	return result;
}
