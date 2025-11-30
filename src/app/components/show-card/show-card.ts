import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-show-card',
    imports: [],
    template: `
        <div class="show-card">
            <img src={{showData.details.images.jpg.image_url}}/>
            <div class="show-info">
                @if (findLink()) {
                    <a href={{crLink}} target="_blank" class="show-link">
                        <h1>{{showData.details.title_english}}</h1>
                    </a>
                } @else {
                    <h1>{{showData.details.title_english}}</h1>
                }
                <p class="subtitle">{{showData.details.year}}</p>
                <p>{{showData.details.rating}}</p>
                <p>{{showData.details.synopsis}}</p>
            </div>
            <div class="rating-info">
                <h1>Personal Rating: {{wholesomeRating}}/100</h1>
                @if (showMore) {
                    <div class="rating-sections">
                        <div class="vert-line"></div>
                        <div class="rating-section">
                            <h3>The Good — 50%</h3>
                            <div class="horiz-line"></div>
                            <br>
                            <h4>Healthy Communication</h4>
                            <div class="category">
                                <p class="subtitle">(15%)</p>
                                <p class="value">10/10</p>
                            </div>
                            <h4>Virtuous Development</h4>
                            <div class="category">
                                <p class="subtitle">(10%)</p>
                                <p class="value">10/10</p>
                            </div>
                            <h4>Development Satisfaction</h4>
                            <div class="category">
                                <p class="subtitle">(15%)</p>
                                <p class="value">10/10</p>
                            </div>
                            <h4>Positive Development Focus</h4>
                            <div class="category">
                                <p class="subtitle">(15%)</p>
                                <p class="value">10/10</p>
                            </div>
                        </div>
                        <div class="vert-line"></div>
                        <div class="rating-section">
                            <h3>The Unfortunate — 30%</h3>
                            <div class="horiz-line"></div>
                            <br>
                            <h4>Visual "Content"</h4>
                            <div class="category">
                                <p class="subtitle">(10%)</p>
                                <p class="value">0/10</p>
                            </div>
                            <h4>Suggestive Dialogue</h4>
                            <div class="category">
                                <p class="subtitle">(10%)</p>
                                <p class="value">0/10</p>
                            </div>
                            <h4>"Content" Focus</h4>
                            <div class="category">
                                <p class="subtitle">(10%)</p>
                                <p class="value">0/10</p>
                            </div>
                        </div>
                        <div class="vert-line"></div>
                        <div class="rating-section">
                            <h3>The Other — 20%</h3>
                            <div class="horiz-line"></div>
                            <br>
                            <h4>Plot Satisfaction</h4>
                            <div class="category">
                                <p class="subtitle">(10%)</p>
                                <p class="value">10/10</p>
                            </div>
                            <h4>Realism</h4>
                            <div class="category">
                                <p class="subtitle">(10%)</p>
                                <p class="value">10/10</p>
                            </div>
                        </div>
                    </div>
                }
                <p class="collapsable" (click)="showMore = !showMore">{{ showMore ? 'Show Less' : 'Show More'}}</p>
            </div>
        </div>
    `,
    styles: `
        p.subtitle {
            color: #878792;
        }
        p.collapsable {
            color: #878792;
            font-size: 12pt;
            cursor: pointer;
        }
        p.collapsable:hover {
            text-decoration-line: underline;
        }

        /*Show Card*/
        div.show-card {
            background-color: #2e2e38;
            border-radius: 8px;
            padding: 10px;
            display: flex;
            gap: 10px;
        }
        .show-card img {
            height: 318px;
            width: 225px;
        }
        .show-card p, h1, h2, h3, h4, h5, h6 {
            margin-top: 0px;
            padding-top: 0px;
            margin-bottom: 0px;
            padding-bottom: 0px;
        }

        /*Show Info*/
        div.show-info {
            flex: 1;
        }
        div.show-info p {
            padding-bottom: 15px;
        }
        a.show-link {
            color: inherit;
            text-decoration: inherit;
            display: flex;
        }
        a.show-link:hover {
            text-decoration-line: underline;
        }

        /*Rating Info*/
        div.rating-info {
            margin-left: auto;
            display: flex;
            flex-direction: column;
            width: min(50%);
        }
        div.rating-sections {
            display: flex;
            gap: 10px;
            height: 100%;
        }
        div.vert-line {
            background-color: #4a4a54;
            background-size: 100% 100%;
            background-position: center center;
            width: 2px;
        }
        div.horiz-line {
            background-color: #4a4a54;
            background-size: 100% 100%;
            background-position: center center;
            height: 2px;
        }
        div.rating-section {
            flex: 0.33;
        }
        div.rating-section h3 {
            padding-top: 10px;
            padding-bottom: 10px;
        }
        div.rating-section div.category {
            display: flex;
            padding-bottom: 15px;
        }
        div.rating-section div.category p.value {
            margin-left: auto;
        }
    `
})
export class ShowCard {
    @Input() showData: any;

    showMore: boolean = false;
    crLink: string = "";
    wholesomeRating: number = 0;

    constructor() {
        
    }

    findLink(): boolean {
        this.showData.streaming.forEach((element: { name: string; url: string; }) => {
            if (element.name == 'Crunchyroll') {
                this.crLink = element.url;
            }
        });

        return this.crLink != "";
    }
}
