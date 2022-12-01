export const enum Theme {
	LIGHT = 'LIGHT',
	DARK = 'DARK',
}

export const enum MonthFormat {
	MM = 'MM',
	MMM = 'MMM',
	MMMM = 'MMMM',
}

export interface SkillData {
	name: string;
	percentage: number;
	logo?: string;
	isPersonal?: boolean;
}

export interface AboutMeData {
	name: string;
	positionP1: string;
	positionP2: string;
	messageMain: string;
	messageSecondary: string;
}

export interface SkillsData {
	name: string;
	skills: SkillData[];
}

export interface ExperienceData {
	position: string;
	company: {
		name: string;
		logo: string;
		website: string;
		hq: string;
	};
	location: string;
	type: string;
	timeline: {
		from: string;
		to?: string;
	};
	highlights: string[];
}

export interface EducationData {
	stage: string;
	course: string;
	institute: {
		name: string;
		logo: string;
		website: string;
		location: string;
	};
	type: string;
	timeline: {
		from: string;
		to?: string;
	};
	result: string;
}

export interface PathName {
	/** Value to show on Path */
	value?: string;

	/** Position from top of the Path */
	top?: string;

	/** Position from bottom of the Path */
	bottom?: string;
}

export interface MonthFormatDataType {
	[MonthFormat.MM]: string;
	[MonthFormat.MMM]: string;
	[MonthFormat.MMMM]: string;
}
export type MonthFormatsDataType = {
	[X: number]: MonthFormatDataType;
};
export const MONTH_FORMATS_DATA: MonthFormatsDataType = Object.freeze({
	0: {
		[MonthFormat.MM]: '01',
		[MonthFormat.MMM]: 'Jan',
		[MonthFormat.MMMM]: 'January',
	},
	1: {
		[MonthFormat.MM]: '02',
		[MonthFormat.MMM]: 'Feb',
		[MonthFormat.MMMM]: 'February',
	},
	2: {
		[MonthFormat.MM]: '03',
		[MonthFormat.MMM]: 'Mar',
		[MonthFormat.MMMM]: 'March',
	},
	3: {
		[MonthFormat.MM]: '04',
		[MonthFormat.MMM]: 'Apr',
		[MonthFormat.MMMM]: 'Apr',
	},
	4: {
		[MonthFormat.MM]: '05',
		[MonthFormat.MMM]: 'May',
		[MonthFormat.MMMM]: 'May',
	},
	5: {
		[MonthFormat.MM]: '06',
		[MonthFormat.MMM]: 'Jun',
		[MonthFormat.MMMM]: 'June',
	},
	6: {
		[MonthFormat.MM]: '07',
		[MonthFormat.MMM]: 'Jul',
		[MonthFormat.MMMM]: 'July',
	},
	7: {
		[MonthFormat.MM]: '08',
		[MonthFormat.MMM]: 'Aug',
		[MonthFormat.MMMM]: 'August',
	},
	8: {
		[MonthFormat.MM]: '09',
		[MonthFormat.MMM]: 'Sep',
		[MonthFormat.MMMM]: 'September',
	},
	9: {
		[MonthFormat.MM]: '10',
		[MonthFormat.MMM]: 'Oct',
		[MonthFormat.MMMM]: 'October',
	},
	10: {
		[MonthFormat.MM]: '11',
		[MonthFormat.MMM]: 'Nov',
		[MonthFormat.MMMM]: 'November',
	},
	11: {
		[MonthFormat.MM]: '12',
		[MonthFormat.MMM]: 'Dec',
		[MonthFormat.MMMM]: 'December',
	},
});
