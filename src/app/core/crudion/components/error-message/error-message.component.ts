import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'error-messages',
    template: `<p *ngIf="errorMessage !== null">{{errorMessage}}</p>`,
    styles: [
        `
      p {
        margin-top: 5px;
        padding-left: 16px;
        margin: 0;
        color: #f44336;
        display: block;
        font-size: 2vh;
      }
    `
    ]
})
export class ErrorMessages {
    
    @Input()
    control: FormControl;
    constructor() { }

    get errorMessage() {

        for (let error in this.control.errors) {
            if (this.control.errors.hasOwnProperty(error) && this.control.touched) {
                return this.getMessage(error, this.control.errors[error]);
            }
        }

        return null;
    }

    private getMessage(validatorName: string, validatorValue?: any) {

        const MESSAGES =
            {
                required: 'Campo obrigatório',
                email: 'Email inválido',
                differentPassword: 'Senhas devem ser iguais',
                invalidPassword: 'Senha deve conter letras maiúsculas e minúsculas e números',
                minlength: `Deve conter pelo menos ${validatorValue.requiredLength} caracteres`,
                maxlength: `Deve conter no máximo ${validatorValue.requiredLength} caracteres`
            };

        return MESSAGES[validatorName];

    }
}

