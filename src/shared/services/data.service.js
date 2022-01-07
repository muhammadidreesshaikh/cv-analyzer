import { Subject } from 'rxjs';

const subject = new Subject();

export const dataService = {
    setData: d => subject.next(d),
    clearData: () => subject.next(),
    getData: () => subject.asObservable()
};