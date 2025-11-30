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
            'details': null,
            'streaming': null
        },
        { // Unnamed Memory
            'id': 53835,
            'ratings': {

            },
            'details': null,
            'streaming': null
        },
        { // Spice and Wolf: Merchant Meets the Wise Wolf
            'id': 51122,
            'ratings': {

            },
            'details': null,
            'streaming': null
        },
        { // Horimiya
            'id': 42897,
            'ratings': {

            },
            'details': null,
            'streaming': null
        },
        { // Recovery of an MMO Junkie
            'id': 36038,
            'ratings': {

            },
            'details': null,
            'streaming': null
        },
        { // Orange
            'id': 32729,
            'ratings': {

            },
            'details': null,
            'streaming': null
        },
        { // Tomo-chan is a Girl!
            'id': 52305,
            'ratings': {

            },
            'details': null,
            'streaming': null
        },
        { // Our love has always been 10 centimeters apart.
            'id': 36220,
            'ratings': {

            },
            'details': null,
            'streaming': null
        },
        { // Tsukigakirei
            'id': 34822,
            'ratings': {

            },
            'details': null,
            'streaming': null
        },
        { // Alya Sometimes Hides Her Feelings in Russian
            'id': 54744,
            'ratings': {

            },
            'details': null,
            'streaming': null
        },
        { // In/Spectre
            'id': 39017,
            'ratings': {

            },
            'details': null,
            'streaming': null
        },
    ];

    constructor(private api: Api, private cd: ChangeDetectorRef) {}

    ngOnInit() {
        // Make requests for general info
        from(this.pageData)
            .pipe(
                concatMap(element => this.api.getDetails(element.id)
                    .pipe(tap(response => element.details = response.data))
                )
            )
            .subscribe({
                next: () => {},
                error: err => console.error('API error:', err),
                complete: () => {
                    console.log('All data requests complete!');
                    // Make requests for streaming info
                    from(this.pageData)
                        .pipe(
                            concatMap(element => this.api.getStreamingInfo(element.id)
                                .pipe(tap(response => element.streaming = response.data))
                            )
                        )
                        .subscribe({
                            next: () => {},
                            error: err => console.error('API error:', err),
                            complete: () => {
                                console.log('All streaming requests complete!');
                                console.log('Full data:', this.pageData);
                                // Detect changes explicitely
                                this.cd.detectChanges();
                            }
                        })
                }
            })
        
    }
}