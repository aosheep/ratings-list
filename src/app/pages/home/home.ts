import { Component } from '@angular/core';
import { Api } from '../../services/api';
import { from } from 'rxjs';
import { concatMap } from 'rxjs';

@Component({
    selector: 'app-home',
    imports: [],
    templateUrl: './home.html',
    styleUrl: './home.css',
})
export class Home {
    listIds: number[] = [
        35062, // The Ancient Magus' Bride
        53835, // Unnamed Memory
        51122, // Spice and Wolf: Merchant Meets the Wise Wolf
        42897, // Horimiya
        36038, // Recovery of an MMO Junkie
        32729, // Orange
        52305, // Tomo-chan is a Girl!
        36220, // Our love has always been 10 centimeters apart.
        34822, // Tsukigakirei
        54744, // Alya Sometimes Hides Her Feelings in Russian
        39017, // In/Spectre
    ];
    listData: any[] = [];

    constructor(private api: Api) {}

    ngOnInit() {
        from(this.listIds)
            .pipe(concatMap(id => this.api.getInfo(id)))
            .subscribe({
                next: data => this.listData.push(data),
                error: err => console.error('API error:', err),
                complete: () => console.log('All requests complete!\nResponse:', this.listData)
            })
    }
}
