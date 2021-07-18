import { Component, Input } from '@angular/core';

@Component({
    selector: 'result',
    template: `
    <div>
    <p *ngFor="let vote of votes; index as i">
        {{i+1}}. {{vote.option}} - {{vote.count}} votes ({{vote.count * 100/total}}%)
    </p>
    </div>
  `
})

export class ResultComponent {
    @Input() votes!: { option: string; count: number; }[];
    total = 0;
    ngOnInit() {
        for (var i = 0; i < this.votes.length; i++) {
            this.total += this.votes[i].count;
        }
    }
}