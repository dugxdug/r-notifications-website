import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'message-stepper',
    templateUrl: './message-stepper.component.html',
    styleUrls: ['./message-stepper.component.scss']
})
export class MessageStepperComponent implements OnInit {
    sales = true;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;

    constructor(private _formBuilder: FormBuilder) { }

    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
          firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
        });
    }
}
