import { Component, OnInit } from '@angular/core';
import {LocalStorageService, LocalStorage, SessionStorageService} from 'ng2-webstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public visibilidad = false;
  constructor(private localSt:SessionStorageService,private storage:SessionStorageService,private router:Router) { }
  ngOnInit() {
    this.localSt.observe('usuario')
			.subscribe((valor) => {
        let jsonValor = JSON.parse(valor);
        if (jsonValor) {
            this.visibilidad = true;
        }
        else{
          this.visibilidad = false;
        }
      });
  }
  cerrarSesion(){
     this.storage.clear("usuario");
     this.router.navigate(['/home']);
  }
}
