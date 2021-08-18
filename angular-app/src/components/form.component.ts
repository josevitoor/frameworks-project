import { Component, Input } from '@angular/core';

@Component({
    selector: 'formulario',
    template: `
    <div *ngIf="state === 'close'; else votingCard">
        <form >
            <label>Título *</label><br/>
            <input [(ngModel)]="title" type="text" name="title"><br/>
            <div *ngFor="let vote of votes; index as i">
                <label> Opção {{i}} *</label><br/>
                <input [(ngModel)]="vote.option" type="text" name={{vote.option}}><br/>

                <label> Votes {{i}} *</label><br/>
                <input [(ngModel)]="vote.count" type="number" name={{vote.count}}><br/>
            </div>
            <div *ngIf="error === 'close'; else errorText">
            </div>
            <ng-template #errorText>
                <p class="error">É preciso preencher todos os campos e os votos maiores que zero!</p>
            </ng-template>
            <booth [options]="['Atualizar']" (onVote)="onVote($event)"></booth>
        </form>
    </div>
    <ng-template #votingCard>
        <votingCard [votes]="votes" state='open' title={{title}}></votingCard>
    </ng-template>
  `,
    styleUrls: ['./style.css'],
})

export class FormComponent {
    @Input() votes!: { option: string; count: number; }[];
    @Input() title!: string;
    state: string = 'close';
    error: string = 'close';

    validationError() {
        const votesOption = this.votes.map((votes) => (
            votes.option
        ));
        const votesCount = this.votes.map((votes) => (
            votes.count
        ));
        const votesValidation = this.votes.map((votes, index) => (
            (votesOption[index].length <= 0 || votesCount[index] <= 0 || !votesCount[index] || this.title.length <= 0) ? true : false
        ))
        for (var i = 0; i < votesValidation.length; i++) {
            if (votesValidation[i] == true) {
                return true;
            }
        }
        return false;
    }

    onVote(index: number) {
        this.validationError() == false ? this.state = 'open' : this.error = 'open'
    }
}