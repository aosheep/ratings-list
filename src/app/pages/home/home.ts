import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
    pageData = [
        { // The Ancient Magus' Bride
            'id': 35062,
            'ratings': {
                'healthy_communication': 7,
                'virtuous_development': 10,
                'development_satisfaction': 8,
                'positive_development_focus': 8,
                'visual_content': 3,
                'suggestive_dialogue': 1,
                'content_focus': 0,
                'plot_satisfaction': 10,
                'realism': 9
            },
            'details': null,
            'streaming': null
        },
        { // Unnamed Memory
            'id': 53835,
            'ratings': {
                'healthy_communication': 6,
                'virtuous_development': 7,
                'development_satisfaction': 8,
                'positive_development_focus': 4,
                'visual_content': 4,
                'suggestive_dialogue': 4,
                'content_focus': 2,
                'plot_satisfaction': 8,
                'realism': 8
            },
            'details': null,
            'streaming': null
        },
        { // Spice and Wolf: Merchant Meets the Wise Wolf
            'id': 51122,
            'ratings': {
                'healthy_communication': 5,
                'virtuous_development': 6,
                'development_satisfaction': 10,
                'positive_development_focus': 7,
                'visual_content': 6,
                'suggestive_dialogue': 2,
                'content_focus': 3,
                'plot_satisfaction': 8,
                'realism': 7
            },
            'details': null,
            'streaming': null
        },
        { // Horimiya
            'id': 42897,
            'ratings': {
                'healthy_communication': 8,
                'virtuous_development': 6,
                'development_satisfaction': 8,
                'positive_development_focus': 8,
                'visual_content': 3,
                'suggestive_dialogue': 5,
                'content_focus': 2,
                'plot_satisfaction': 9,
                'realism': 9
            },
            'details': null,
            'streaming': null
        },
        { // Recovery of an MMO Junkie
            'id': 36038,
            'ratings': {
                'healthy_communication': 6,
                'virtuous_development': 7,
                'development_satisfaction': 8,
                'positive_development_focus': 7,
                'visual_content': 3,
                'suggestive_dialogue': 4,
                'content_focus': 1,
                'plot_satisfaction': 8,
                'realism': 7
            },
            'details': null,
            'streaming': null
        },
        { // Orange
            'id': 32729,
            'ratings': {
                'healthy_communication': 8,
                'virtuous_development': 7,
                'development_satisfaction': 8,
                'positive_development_focus': 8,
                'visual_content': 0,
                'suggestive_dialogue': 0,
                'content_focus': 0,
                'plot_satisfaction': 9,
                'realism': 9
            },
            'details': null,
            'streaming': null
        },
        { // Tomo_chan is a Girl!
            'id': 52305,
            'ratings': {
                'healthy_communication': 3,
                'virtuous_development': 6,
                'development_satisfaction': 7,
                'positive_development_focus': 5,
                'visual_content': 8,
                'suggestive_dialogue': 7,
                'content_focus': 6,
                'plot_satisfaction': 8,
                'realism': 6
            },
            'details': null,
            'streaming': null
        },
        { // Our love has always been 10 centimeters apart.
            'id': 36220,
            'ratings': {
                'healthy_communication': 7,
                'virtuous_development': 8,
                'development_satisfaction': 7,
                'positive_development_focus': 6,
                'visual_content': 0,
                'suggestive_dialogue': 1,
                'content_focus': 0,
                'plot_satisfaction': 8,
                'realism': 6
            },
            'details': null,
            'streaming': null
        },
        { // Tsukigakirei
            'id': 34822,
            'ratings': {
                'healthy_communication': 7,
                'virtuous_development': 8,
                'development_satisfaction': 8,
                'positive_development_focus': 8,
                'visual_content': 1,
                'suggestive_dialogue': 2,
                'content_focus': 0,
                'plot_satisfaction': 9,
                'realism': 8
            },
            'details': null,
            'streaming': null
        },
        { // Alya Sometimes Hides Her Feelings in Russian
            'id': 54744,
            'ratings': {
                'healthy_communication': 6,
                'virtuous_development': 4,
                'development_satisfaction': 6,
                'positive_development_focus': 3,
                'visual_content': 6,
                'suggestive_dialogue': 10,
                'content_focus': 3,
                'plot_satisfaction': 6,
                'realism': 7
            },
            'details': null,
            'streaming': null
        },
        { // In/Spectre
            'id': 39017,
            'ratings': {
                'healthy_communication': 6,
                'virtuous_development': 4,
                'development_satisfaction': 6,
                'positive_development_focus': 4,
                'visual_content': 6,
                'suggestive_dialogue': 5,
                'content_focus': 3,
                'plot_satisfaction': 8,
                'realism': 8
            },
            'details': null,
            'streaming': null
        },
    ];

    constructor(private api: Api, private cd: ChangeDetectorRef) {}

    ngOnInit() {
        // Make requests for details
        this.pageData.forEach(element => {
            this.api.getDetails(element.id).then((result: any) => {
                element.details = result.data;
                console.log(`Details Request Complete (${result.data.title_english})`);
                this.cd.detectChanges();
            });
            this.api.getStreamingInfo(element.id).then((result: any) => {
                element.streaming = result.data;
                console.log(`Streaming Request Complete`);
                this.cd.detectChanges();
            });
        });
    }
}