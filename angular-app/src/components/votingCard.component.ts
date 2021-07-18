import { Component, Input } from '@angular/core';

@Component({
    selector: 'votingCard',
    template: `
    <div class="votingCard" *ngIf="state === 'open'; else results">
        <h3>{{title}}</h3>
        <booth [options]="options" (onVote)="onVote($event)"></booth>
    </div>
    <ng-template #results>
        <div class="votingCard">
            <h3>{{title}}</h3>
            <result [votes]="votes"></result>
        </div>
    </ng-template>
  `,
    styleUrls: ['./style.css'],
})

export class VotingCardComponent {
    @Input() title!: string;
    @Input() votes!: { option: string; count: number; }[];
    @Input() state!: string;
    options: string[] = [];
    ngOnInit() {
        for (var i = 0; i < this.votes.length; i++) {
            this.options[i] = this.votes[i].option;
        }
    }
    onVote(index: number) {
        this.state = 'close';
        this.votes[index].count++;
    }
}