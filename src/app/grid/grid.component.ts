import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  providers: [ApiService]
})
export class GridComponent implements OnInit {

  displayedColumns = ['etiqueta','descricao'];
  dataSource: MatTableDataSource<any>;
  

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    const dados = this.apiService.listar()
      .subscribe((resposta: any)=>{
        console.log('retorno',resposta);
        this.dataSource = new MatTableDataSource(resposta.json());
      });
    
  }

}