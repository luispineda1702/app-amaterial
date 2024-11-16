import { Component } from '@angular/core';
import { MatButton, MatButtonModule, MatFabButton, MatIconButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-ejemplo-amaterial',
  standalone: true,
  imports: [MatIconModule, MatDivider, MatButton,MatIconButton,MatFabButton,MatDividerModule,MatButtonModule,MatCardModule],
  templateUrl: './ejemplo-amaterial.component.html',
  styleUrl: './ejemplo-amaterial.component.css'
})
export class EjemploAmaterialComponent {

}
