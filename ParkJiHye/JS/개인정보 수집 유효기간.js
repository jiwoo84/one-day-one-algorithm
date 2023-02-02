function solution(today, terms, privacies) {
	const [Tyear, Tmonth, Tday] = today.split('.').map(Number);
	const termObj = terms.reduce((res, item) => {
		const [kind, duration] = item.split(' ');
		res[kind] = parseInt(duration);
		return res;
	}, {});

	const result = privacies.map((p) => {
		const [date, kind] = p.split(' ');
		const duration = termObj[kind];
		let [Vyear, Vmonth, Vday] = [...date.split('.').map(Number)];

		Vmonth += duration;
		Vyear +=
			Vmonth % 12 === 0 ? parseInt(Vmonth / 12) - 1 : parseInt(Vmonth / 12);
		Vmonth = Vmonth % 12 === 0 ? 12 : Vmonth % 12;

		if (Vyear < Tyear) {
			acc.push(idx + 1);
		} else if (Vyear === Tyear && Vmonth < Tmonth) {
			acc.push(idx + 1);
		} else if (Vyear === Tyear && Vmonth === Tmonth && Vday <= Tday) {
			acc.push(idx + 1);
		}
	});
	return result;
}
