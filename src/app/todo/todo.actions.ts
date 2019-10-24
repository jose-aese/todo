import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] Agregar ToDo';

export const TOGGLE_TODO = '[TOGGLE_TODO]  Toggle ToDo';
export const TOGGLE_ALL_TODO = '[TOGGLE_ALL_TODO]  Toggle All ToDo';

export const EDITARTODO = '[EDITARTODO]  Editar ToDo';
export const BORRARTODO = '[BORRARTODO]  Borrar ToDo';

export const BORRARCOMPLETADO = '[BORRARCOMPLETADO]  Borrar Completados';


export class AgregarTodoActions implements Action {
    readonly type = AGREGAR_TODO;

    constructor(public texto: string) {

    }

}

export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;

    constructor(public id: number) {

    }

}


export class ToggleAllTodoAction implements Action {
    readonly type = TOGGLE_ALL_TODO;

    constructor(public completado: boolean) {

    }

}

export class EditarTodoAction implements Action {
    readonly type = EDITARTODO;

    constructor(public id: number, public text: string) {

    }

}

export class BorrarTodoAction implements Action {
    readonly type = BORRARTODO;

    constructor(public id: number) {

    }

}


export class BorrarCompletadosAction implements Action {
    readonly type = BORRARCOMPLETADO;
}

export type Acciones = AgregarTodoActions | ToggleTodoAction | EditarTodoAction | BorrarTodoAction | ToggleAllTodoAction |
 BorrarCompletadosAction;
