import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {DepartureService} from '../../../shared/services/DepartureService';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';


const statesWithFlags = [
    {'label': 'Alabama', 'flag': '5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png'},
    {'label': 'Alaska', 'flag': 'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png'},
    {'label': 'Arizona', 'flag': '9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png'},
    {'label': 'Arkansas', 'flag': '9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png'},
    {'label': 'California', 'flag': '0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png'},
    {'label': 'Colorado', 'flag': '4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png'}
];


@Component({
    selector: 'app-add-departure-modal',
    templateUrl: './add-departure-modal.component.html',
    providers: [ DepartureService]
})
export class AddDepartureModalComponent implements OnInit {
    @Output()
    public OnClose: EventEmitter<any> = new EventEmitter();

    public model: any;

    search = (text$: Observable<string>) =>
        text$
            .debounceTime(200)
            .map(term => term === '' ? []
                : statesWithFlags.filter(v => v.label.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))

    formatter = (x: {label: string}) => x.label;


    constructor(private _modalService: NgbActiveModal,
                private _departureService: DepartureService) { }

    ngOnInit(): void {

    }

    CloseModal() {
        this._modalService.close();
        this.OnClose.next(null);
    }

}
