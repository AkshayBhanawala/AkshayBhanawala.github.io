import { VueCookies } from 'vue3-cookies/dist/interfaces';
import { MonthFormat, MONTH_FORMATS_DATA, Theme } from '@/types';
import config from '@/config';

export function getSavedTheme(cookies: VueCookies): Theme | false {
	if (cookies.isKey(config.themeKey)) {
		let cValue = cookies.get(config.themeKey);
		cValue = cValue ? String(cValue).trim() : '';
		if (cValue) {
			if (Theme.DARK === String(cValue)) {
				return Theme.DARK;
			} else if (Theme.LIGHT === String(cValue)) {
				return Theme.LIGHT;
			}
		}
	}
	return false;
}

export function saveTheme(cookies: VueCookies, theme: Theme): void {
	cookies.set(config.themeKey, theme, 60 * 60 * 12);
}

export function getTagifiedName(sectionName: string): string {
	return sectionName.toLowerCase().split(' ').join('-').replace(/-+/g, '-');
}

export function getMonthFormat(monthNumber: number, format: MonthFormat = MonthFormat.MMM): string {
	if (!isNaN(monthNumber)) {
		return MONTH_FORMATS_DATA[monthNumber][format];
	}
	return String(monthNumber);
}

export default {
	getSavedTheme,
	saveTheme,
	getTagifiedName,
	getMonthFormat,
};
