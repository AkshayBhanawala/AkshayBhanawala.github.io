import Axios, { AxiosResponse } from 'axios';
import { AboutMeData, EducationData, ExperienceData, SkillsData } from '@/types';

export function getAboutMeData(): Promise<AxiosResponse<AboutMeData>> {
	return Axios.get('/data/me.json');
}

export function getSkillsData(): Promise<AxiosResponse<SkillsData[]>> {
	return Axios.get('/data/skills.json');
}

export function getExperienceData(): Promise<AxiosResponse<ExperienceData[]>> {
	return Axios.get('/data/experience.json');
}

export function getEducationData(): Promise<AxiosResponse<EducationData[]>> {
	return Axios.get('/data/education.json');
}
