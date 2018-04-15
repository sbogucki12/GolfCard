//import { createStore } from 'redux';

//export interface AppState {
//    courseName: string;
//    holeNumber?: number;
//    holePar?: number;
//    holeScore?: number;
//}

//var state: AppState = {} as AppState;
//state.courseName = 'Pebble Beach';
//state.holeNumber = 0;
//state.holePar = 0;
//state.holeScore = 0;

//const reducer = (state: AppState, action: any) => {
//    switch (action.type) {
//        case 'ADD':
//            state = {
//                ...
//                state.holeNumber = action.payload
//            };
//            break;
//        case 'SUBTRACT':
//            break;
//        default:
//            break;
//    }
//    return state;
//};

//const store = createStore(reducer, state);

//store.subscribe(() => {
//    console.log('Store Updated', store.getState().holeNumber);
//});

//const golfHole = 2;

//store.dispatch({
//    type: 'ADD',
//    payload: golfHole
//});