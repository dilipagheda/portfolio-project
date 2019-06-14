import { ABOUTME } from '../data/content/aboutme';
import { ADVENTURES } from '../data/content/adventures';
import { HOME } from '../data/content/home';
import {PORTFOLIO} from "../data/content/portfolio";
import {RESUME} from "../data/content/resume/resume";
import {EXPERIENCE} from '../data/content/experience';
import {CERTIFICATES} from "../data/content/education/certificates";

export const initialState = {
    aboutme: ABOUTME,
    adventures: ADVENTURES,
    home: HOME,
    portfolio: PORTFOLIO,
    resume:RESUME,
    experience:EXPERIENCE,
    certificates:CERTIFICATES
};

export const Reducer = (state = initialState, action) => {
    return state;
};
