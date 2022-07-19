import { ofType, mergeMap, map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const taskEpic = action$ => action$.pipe(
    ajax.getJSON(``).pipe(
            map(response => console.log(response))
        )
);