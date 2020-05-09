import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styles: []
})
export class SiteComponent implements OnInit {
// bttn-default
  signupForm: FormGroup;

  constructor(
    private builder: FormBuilder
    ) {
    this.signupForm = this.builder.group({
      correo: ['', Validators.compose([Validators.required, Validators.email])],
      nombre: ['', Validators.required],
      comentario: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  enviar(values) {
    console.log(values);
  }

}
