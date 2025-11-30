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
                <h1>Personal Rating: {{calcRating()}}/100</h1>
                @if (showMore) {
                    <div class="rating-sections">
                        <div class="vert-line"></div>
                        <div class="rating-section">
                            <h3>The Good — 50%</h3>
                            <div class="horiz-line"></div>
                            <br>
                            <div class="tooltip" [attr.data-tip]="categoryDescs.healthy_communication">
                                <h4>Healthy Communication</h4>
                            </div>
                            <div class="category">
                                <p class="subtitle">(15%) {{1.5 * this.showData.ratings.healthy_communication}} = 1.5 * {{this.showData.ratings.healthy_communication}}</p>
                                <p class="value">{{this.showData.ratings.healthy_communication}}/10</p>
                            </div>
                            <div class="tooltip" [attr.data-tip]="categoryDescs.virtuous_development">
                                <h4>Virtuous Development</h4>
                            </div>
                            <div class="category">
                                <p class="subtitle">(10%) {{this.showData.ratings.virtuous_development}}</p>
                                <p class="value">{{this.showData.ratings.virtuous_development}}/10</p>
                            </div>
                            <div class="tooltip" [attr.data-tip]="categoryDescs.development_satisfaction">
                                <h4>Development Satisfaction</h4>
                            </div>
                            <div class="category">
                                <p class="subtitle">(15%) {{1.5 * this.showData.ratings.development_satisfaction}} = 1.5 * {{this.showData.ratings.development_satisfaction}}</p>
                                <p class="value">{{this.showData.ratings.development_satisfaction}}/10</p>
                            </div>
                            <div class="tooltip" [attr.data-tip]="categoryDescs.positive_development_focus">
                                <h4>Positive Development Focus</h4>
                            </div>
                            <div class="category">
                                <p class="subtitle">(15%) {{1.5 * this.showData.ratings.positive_development_focus}} =  1.5 * {{this.showData.ratings.positive_development_focus}}</p>
                                <p class="value">{{this.showData.ratings.positive_development_focus}}/10</p>
                            </div>
                        </div>
                        <div class="vert-line"></div>
                        <div class="rating-section">
                            <h3>The Unfortunate — 30%</h3>
                            <div class="horiz-line"></div>
                            <br>
                            <div class="tooltip" [attr.data-tip]="categoryDescs.visual_content">
                                <h4>Visual "Content"</h4>
                            </div>
                            <div class="category">
                                <p class="subtitle">(10%) {{10 - this.showData.ratings.visual_content}} = 10 - {{this.showData.ratings.visual_content}}</p>
                                <p class="value">{{this.showData.ratings.visual_content}}/10</p>
                            </div>
                            <div class="tooltip" [attr.data-tip]="categoryDescs.suggestive_dialogue">
                                <h4>Suggestive Dialogue</h4>
                            </div>
                            <div class="category">
                                <p class="subtitle">(10%) {{10 - this.showData.ratings.suggestive_dialogue}} = 10 - {{this.showData.ratings.suggestive_dialogue}}</p>
                                <p class="value">{{this.showData.ratings.suggestive_dialogue}}/10</p>
                            </div>
                            <div class="tooltip" [attr.data-tip]="categoryDescs.content_focus">
                                <h4>"Content" Focus</h4>
                            </div>
                            <div class="category">
                                <p class="subtitle">(10%) {{10 - this.showData.ratings.content_focus}} = 10 - {{this.showData.ratings.content_focus}}</p>
                                <p class="value">{{this.showData.ratings.content_focus}}/10</p>
                            </div>
                        </div>
                        <div class="vert-line"></div>
                        <div class="rating-section">
                            <h3>The Other — 20%</h3>
                            <div class="horiz-line"></div>
                            <br>
                            <div class="tooltip" [attr.data-tip]="categoryDescs.plot_satisfaction">
                                <h4>Plot Satisfaction</h4>
                            </div>
                            <div class="category">
                                <p class="subtitle">(10%) {{this.showData.ratings.plot_satisfaction}}</p>
                                <p class="value">{{this.showData.ratings.plot_satisfaction}}/10</p>
                            </div>
                            <div class="tooltip" [attr.data-tip]="categoryDescs.realism">
                                <h4>Realism</h4>
                            </div>
                            <div class="category">
                                <p class="subtitle">(10%) {{this.showData.ratings.realism}}</p>
                                <p class="value">{{this.showData.ratings.realism}}/10</p>
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

        /*Category Tooltips*/
        div.tooltip::after {
            content: attr(data-tip);
            position: absolute;
            visibility: hidden;
            background-color: #1e1e27;
            border-radius: 8px;
            padding: 5px;
            font-size: 12pt;
        }
        div.tooltip:hover::after {
            visibility: visible;
        }
    `
})

export class ShowCard {
    categoryDescs = {
        'healthy_communication': 'The degree to which communication between characters in a relationship is productive, calm, and respectful',
        'virtuous_development': 'The degree to which characters in a relationship change in a virtuous and righteous direction',
        'development_satisfaction': 'The degree to which characters in a relationship have an end result of development that is satisfying',
        'positive_development_focus': 'The degree to which the show focuses on or has reoccurring themes around healthy relationships',
        'visual_content': 'The amount of shown or focused-on indecency',
        'suggestive_dialogue': 'The amount of dialogue or jokes focused on sexual matters',
        'content_focus': 'The degree to which the show is focused on or has reoccurring sexual themes',
        'plot_satisfaction': 'The degree to which the plot (either including or exclusively the main relationship) is satisfactory by the end',
        'realism': 'The degree to which the actions and motives of characters in the show can be reasonably justified given its context and world'
    }

    @Input() showData: any;

    showMore: boolean = false;
    crLink: string = "";

    calcRating(): number {
        // Variable for readability
        let ratings = this.showData.ratings;

        let theGood = ratings.healthy_communication + ratings.virtuous_development + (ratings.development_satisfaction * 1.5) + (ratings.positive_development_focus * 1.5);
        let theUnfortunate = (10 - ratings.visual_content) + (10 - ratings.suggestive_dialogue) + (10 - ratings.content_focus);
        let theOther = ratings.plot_satisfaction + ratings.realism;

        return theGood + theUnfortunate + theOther;
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
