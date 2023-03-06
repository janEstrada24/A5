import { IPeca } from './IPeca';
import { ICasella } from './ICasella';

export interface ITaulell <T extends IPeca> {
    num: number;
    pecesBlanques: Array<T>;
    pecesNegres: Array<T>;
    caselles: Array<Array<ICasella>>;
}