import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
	selector: '[autofocusInvalidInput]'
})
export class AutoFocusDirective {
	constructor(private el: ElementRef) {}

	@HostListener('submit')
	onFormSubmit() {
		const invalidInputControl = this.el.nativeElement.querySelector(
			'.ng-invalid'
		);

		if (invalidInputControl) {
			invalidInputControl.focus();
		}
	}
}
