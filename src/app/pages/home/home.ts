import { ChangeDetectorRef, Component } from '@angular/core';
import { Api } from '../../services/api';
import { from, concatMap, tap } from 'rxjs';
import { ShowCard } from '../../components/show-card/show-card';

@Component({
    selector: 'app-home',
    imports: [ShowCard],
    templateUrl: './home.html',
    styleUrl: './home.css',
})
export class Home {
    pageData = [
        // The Ancient Magus' Bride
        {
            'id': 35062,
            'ratings': {
                
            },
            'data': null
        },
        // Unnamed Memory
        {
            'id': 53835,
            'ratings': {

            },
            'data': null
        },
        // Spice and Wolf: Merchant Meets the Wise Wolf
        {
            'id': 51122,
            'ratings': {

            },
            'data': null
        },
        // Horimiya
        {
            'id': 42897,
            'ratings': {

            },
            'data': null
        },
        // Recovery of an MMO Junkie
        {
            'id': 36038,
            'ratings': {

            },
            'data': null
        },
        // Orange
        {
            'id': 32729,
            'ratings': {

            },
            'data': null
        },
        // Tomo-chan is a Girl!
        {
            'id': 52305,
            'ratings': {

            },
            'data': null
        },
        // Our love has always been 10 centimeters apart.
        {
            'id': 36220,
            'ratings': {

            },
            'data': null
        },
        // Tsukigakirei
        {
            'id': 34822,
            'ratings': {

            },
            'data': null
        },
        // Alya Sometimes Hides Her Feelings in Russian
        {
            'id': 54744,
            'ratings': {

            },
            'data': null
        },
        // In/Spectre
        {
            'id': 39017,
            'ratings': {

            },
            'data': null
        },
    ];

    constructor(private api: Api, private cd: ChangeDetectorRef) {}

    ngOnInit() {
        from(this.pageData)
            .pipe(
                concatMap(element => this.api.getInfo(element.id)
                    .pipe(tap(response => element.data = response.data))
                )
            )
            .subscribe({
                next: () => {},
                error: err => console.error('API error:', err),
                complete: () => {
                    console.log('All requests complete!\nResponse:', this.pageData);
                    // Detect changes explicitely
                    this.cd.detectChanges();
                }
            })
    }
}