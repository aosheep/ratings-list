import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concatMap, delay, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class RequestQueue {
    private queue = new Subject<() => any>();

    private rateLimitDelay = 500;

    constructor(private http: HttpClient) {
        this.queue.pipe(
            concatMap(fn => {
                return fn().pipe(delay(this.rateLimitDelay))
            })
        ).subscribe();
    }

    request<T>(callback: () => any) {
        return new Promise<T>(resolve => {
            this.queue.next(() => callback().pipe(
                concatMap((data: T) => {
                    resolve(data);
                    return [data];
                })
            ));
        });
    }
}
