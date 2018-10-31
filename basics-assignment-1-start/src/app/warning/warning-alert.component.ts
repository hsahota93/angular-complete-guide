import { Component } from "@angular/core";

@Component({
    selector: 'app-warning',
    template: '<h1>Warning!<h1>',
    styles: [`
        h1 {
            color: red;
        }`]
})
export class WarningAlertComponent {

}