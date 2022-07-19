import { combineEpics } from 'redux-observable';
import taskEpic from './taskEpic';

export const rootEpic = combineEpics(
    taskEpic
);