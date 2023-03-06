import { IPeca } from "./IPeca";

export interface IJugador <T extends IPeca> {
    nom: string;
    pecesInicials: Array<T>;
    pecesPerdudes: Array<T>;
}