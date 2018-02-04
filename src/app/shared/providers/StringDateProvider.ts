import {NgbDateNativeAdapter} from '../adapters/NgbDateNativeAdapter';
import {NgbDateAdapter} from '@ng-bootstrap/ng-bootstrap';


export let StringDateProvider = {provide: NgbDateAdapter, useClass: NgbDateNativeAdapter};



