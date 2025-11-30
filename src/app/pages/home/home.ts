import { ChangeDetectorRef, Component } from '@angular/core';
import { Api } from '../../services/api';
import { from, concatMap, tap, concatAll } from 'rxjs';
import { ShowCard } from '../../components/show-card/show-card';

@Component({
    selector: 'app-home',
    imports: [ShowCard],
    templateUrl: './home.html',
    styleUrl: './home.css',
})
export class Home {
    pageData = [
        { // The Ancient Magus' Bride
            'id': 35062,
            'ratings': {
                
            },
            'data': null,
            'streaming': null
        },
        { // Unnamed Memory
            'id': 53835,
            'ratings': {

            },
            'data': null,
            'streaming': null
        },
        { // Spice and Wolf: Merchant Meets the Wise Wolf
            'id': 51122,
            'ratings': {

            },
            'data': null,
            'streaming': null
        },
        { // Horimiya
            'id': 42897,
            'ratings': {

            },
            'data': null,
            'streaming': null
        },
        { // Recovery of an MMO Junkie
            'id': 36038,
            'ratings': {

            },
            'data': null,
            'streaming': null
        },
        { // Orange
            'id': 32729,
            'ratings': {

            },
            'data': null,
            'streaming': null
        },
        { // Tomo-chan is a Girl!
            'id': 52305,
            'ratings': {

            },
            'data': null,
            'streaming': null
        },
        { // Our love has always been 10 centimeters apart.
            'id': 36220,
            'ratings': {

            },
            'data': null,
            'streaming': null
        },
        { // Tsukigakirei
            'id': 34822,
            'ratings': {

            },
            'data': null,
            'streaming': null
        },
        { // Alya Sometimes Hides Her Feelings in Russian
            'id': 54744,
            'ratings': {

            }
        },
        { // In/Spectre
            'id': 39017,
            'ratings': {

            },
            'data': null,
            'streaming': null
        },
    ];

    constructor(private api: Api, private cd: ChangeDetectorRef) {}

    ngOnInit() {
        from(this.pageData)
            .pipe(
                concatMap(element => this.api.getDetails(element.id)
                    .pipe(tap(response => element.data = response.data))
                )
            )
            .subscribe({
                next: () => {},
                error: err => console.error('API error:', err),
                complete: () => {
                    console.log('All data requests complete!');
                }
            })
        from(this.pageData)
            .pipe(
                concatMap(element => this.api.getStreamingInfo(element.id)
                    .pipe(tap(response => element.data = response.streaming))
                )
            )
            .subscribe({
                next: () => {},
                error: err => console.error('API error:', err),
                complete: () => {
                    console.log('All streaming requests complete!');
                }
            })
        // Detect changes explicitely
        this.cd.detectChanges();
    }
}