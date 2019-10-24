import { Action } from '@ngrx/store';

export const SET_FILTRO = '[SET_FILTRO] Set Filtro';

export type filtrosValidos = 'Todos' | 'Completados' | 'Pendientes';

export class SetFiltroAccion implements Action {
    readonly type = SET_FILTRO;

    constructor(public filtro: filtrosValidos) {
    }
}

export type Acciones = SetFiltroAccion;
