import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [ApiService]
})
export class FormularioComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  adicionar(frm: FormControl){
    this.apiService.adicionar(frm.value)    
      .subscribe(() => {
        frm.reset();
      });
  }

}
