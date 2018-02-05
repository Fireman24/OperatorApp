import {
    Component, EventEmitter, OnInit, Output, ViewChild
} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {MapComponent} from '../../../shared/modules/map-module/map.component';
import {GpsPoint} from '../../../shared/modules/map-module/GpsPoint';

import {FireCarService} from '../../../shared/services/FireCarService';
import {FireCar} from '../../../shared/models/FireCar';
import {Observable} from 'rxjs/Observable';
import {Department} from '../../../shared/models/Department';
import {DepartmentService} from '../../../shared/services/DepartmentService';

// TODO: В идеале сделать получение списка специализаций.
const specializations = ['Автоцистерна', 'Насосно-рукавный', 'Первой помощи', 'С насосом высокого давления', 'Аэродромный',
        'Порошкового тушения', 'Пенного тушения', 'Комбинированного тушения', 'Газового тушения',
        'Насосная станция', 'Газо-водяного тушения', 'Автолестница', 'Автоподъёмник', 'Рукавный',
        'Дымоудаления', 'Газодымозащитной службы', 'Аварийно-спасательный', 'Штабной'];

@Component({
    selector: 'app-firecar-form',
    templateUrl: './firecar-form.component.html',
    providers: [ FireCarService, DepartmentService]
})
export class FireCarFormComponent implements OnInit {

    private _fireCar: FireCar = new FireCar();

    private _departments: Department[] = [];

    private _editMode = false;

    @Output()
    public OnClose: EventEmitter<any> = new EventEmitter();

    @Output()
    public OnInit: EventEmitter<any> = new EventEmitter();


    constructor(private modalService: NgbActiveModal,
                private fireCarService: FireCarService,
                private departmentService: DepartmentService) { }

    public get EditMode(): boolean {
        return this._editMode;
    }

    ngOnInit(): void {
        this.OnInit.next(null);
        this.departmentService.getDepartments().subscribe(data => {
            this._departments = data;
        });
    }

    set FireCar(value) {
        if (value == null) {
            return;
        }
        this._fireCar = value;
        // Если карта готова - рисует, если нет, то подписываемся на карту.
    }

    get FireCar(): FireCar {
        return this._fireCar;
    }

    SaveButtonClick() {
        if (this._editMode) {
            this.fireCarService.updateFireCar(this.FireCar).subscribe(
                (data: FireCar) => {
                    this.FireCar = data;
                    this.CloseModal();
                },
                error => console.log(error)
            );
        } else {
            this.fireCarService.addFireCar(this.FireCar).subscribe(
                (data: FireCar) => {
                    this.FireCar = data;
                    this.CloseModal();
                },
                error => console.log(error)
            );
        }
    }

    EditFireCar(fireCar: FireCar) {
        this._editMode = true;
        this.FireCar = fireCar ;
    }

    get DepartmentsList(): Department[] {
        return this._departments;
    }

    CloseModal() {
        this.modalService.close();
        this.OnClose.next(null);
    }

    searchDepartment = (text$: Observable<string>) => {
        return text$
            .map(term => term === '' ? []
                : this.DepartmentsList.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));
    }

    public departmentFormatter = (x: {name: string}) => x.name;

    searchSpec = (text$: Observable<string>) => {
        return text$
            .map(term => term === '' ? []
                : specializations.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));
    }
}
