import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-show-card',
    imports: [],
    template: `
        <div class="show-card">
            <h2>{{showData.data.title_english}}</h2>
            <ul>
                <li>{{showData.data.year}}</li>
                <li>{{showData.data.rating}}</li>
                <li>{{showData.data.status}}</li>
            </ul>
        </div>
    `,
    styles: `
        div.show-card {
            background: blue;
        }
    `,
})
export class ShowCard {
    @Input() showData: any;
}
