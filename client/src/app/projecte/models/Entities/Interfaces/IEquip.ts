import { IJugador } from "./IJugador";
import { IPeca } from "./IPeca";

export interface IEquip <T extends IJugador<IPeca>> {
    num: number;
    jugadors: Array<T>;
}