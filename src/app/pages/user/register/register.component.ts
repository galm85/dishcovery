import { Component, inject } from '@angular/core';
import {FormBuilder,FormGroup,Validators,ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {


  private fb = inject(FormBuilder);

  registrationForm:FormGroup = this.fb.group({
    email:['', [Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]],
    confirmPassword:['',[Validators.required]],
    firstName:['',[Validators.required,Validators.minLength(2)]],
    lastName:['',[Validators.required,Validators.minLength(2)]],
  },{
    validators:this.passwordMatchValidator
  });


  passwordMatchValidator(form:FormGroup){
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    if(password && confirmPassword && password.value !== confirmPassword.value){
      return {passwordMismatch:true}
    }
    return null;
  }

  onSubmit(){
    if(this.registrationForm.valid){
      const formData = this.registrationForm.value;
      console.log(formData)
      // ...
    }else{
      this.registrationForm.markAllAsTouched();
    }
  }

  getFieldError(fieldName:string):string{
    const field = this.registrationForm.get(fieldName);
    if(field?.errors && field.touched){
      if(field.errors['required']) return `${fieldName} is requierd`
      if(field.errors['email']) return `Please enter a valid email address`
      if(field.errors['minlength']) return `${fieldName} must be at least ${field.errors['minlength'].requiredLength} characters`
    }
    return '';
  }



}
