import * as fromFiltro from './filter.actions';




const estadoInicial: fromFiltro.filtrosValidos = 'Todos';

export function filtroReducer(state = estadoInicial, accion: fromFiltro.Acciones): fromFiltro.filtrosValidos {
    switch (accion.type) {
        case fromFiltro.SET_FILTRO:
            return accion.filtro;
        default:
            return state;
    }
}
