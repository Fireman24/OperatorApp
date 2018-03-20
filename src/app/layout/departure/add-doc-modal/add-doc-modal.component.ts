import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {DepartureService} from '../../../shared/services/DepartureService';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/merge';


@Component({
    selector: 'app-doc-departure-modal',
    templateUrl: './add-doc-modal.component.html',
    providers: [ DepartureService]
})
export class AddDocumentModalComponent implements OnInit {

    public file: File = null;

    @Output()
    public OnClose: EventEmitter<any> = new EventEmitter();

    constructor(private _modalService: NgbActiveModal,
                private _departmentService: DepartureService) {
    }

    ngOnInit(): void {
    }

    handleFileInput(files: FileList) {
        this.file = files.item(0);
        this.CloseModal();
    }

    CloseModal() {
        this._modalService.close();
        this.OnClose.next(null);
    }

}
