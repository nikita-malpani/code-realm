import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HeroFormComponent } from "./hero-form.component";
import { Hero } from '../hero';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule, MatNativeDateModule, MatInputModule, MatButtonModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
describe('HeroFormComponent', () => {

    let component: HeroFormComponent;
    let fixture: ComponentFixture<HeroFormComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule,RouterTestingModule, FormsModule, MatFormFieldModule,  MatDatepickerModule, MatNativeDateModule, MatInputModule, MatButtonModule],
            declarations: [HeroFormComponent]
        });

        fixture = TestBed.createComponent(HeroFormComponent);

        component = fixture.componentInstance;
        component.ngOnInit();
    });

    it('Check form invalid when empty', () => {
        expect(component.heroFom.valid).toBeFalsy();
    });

    it('First Name field validity', () => {
        let errors = {};
        let firstName = component.heroFom.controls['firstName'];
        
        expect(firstName.valid).toBeFalsy();

        // FirstName field is required
        errors = firstName.errors ;        
        expect(errors['required']).toBeTruthy();

        // Set FirstName to something correct
        firstName.setValue("test");
        expect(firstName.valid).toBeTruthy();

        // Set FirstName to something correct
        firstName.setValue("");
        expect(firstName.valid).toBeFalsy();
    });

    it('Last Name field validity', () => {
        let errors = {};
        let lastName = component.heroFom.controls['lastName'];
        expect(lastName.valid).toBeFalsy();

        // LastName field is required
        errors = lastName.errors ;
        expect(errors['required']).toBeTruthy();

        // Set LastName to something correct
        lastName.setValue("test");
        expect(lastName.valid).toBeTruthy();

        // Set LastName to something correct
        lastName.setValue("");
        expect(lastName.valid).toBeFalsy();
    });

    it('DOB field validity', () => {
        let errors = {};
        let DOB = component.heroFom.controls['DOB'];
        expect(DOB.valid).toBeFalsy();

        // date field is required
        errors = DOB.errors ;
        expect(errors['required']).toBeTruthy();
    });

    it('Contact field validity', () => {
        let errors = {};
        let contact = component.heroFom.controls['contact'];
        expect(contact.valid).toBeFalsy();

        // Contact field is required
        errors = contact.errors ;
        expect(errors['required']).toBeTruthy();

        // Set Contact to something correct
        contact.setValue(1234567890);
        expect(contact.valid).toBeTruthy();

        // Set Contact to something correct
        contact.setValue(12345);
        expect(contact.valid).toBeFalsy();
    });

});