import { Component, ViewChild, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { AddWorkflowDialogComponent } from './add-workflow-dialog/add-workflow-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'q-portal';
  constructor(public dialog:MatDialog){}
  ngOnInit() {
   
  }
openDialog(): void{
  const dialogconfig = new MatDialogConfig();
  dialogconfig.disableClose = true;
  dialogconfig.autoFocus =true;
  dialogconfig.position = {
    top: '5%',
    right: '60%'
  };
  dialogconfig.width = '650px';
  dialogconfig.height = '650px';
  const dialogRef = this.dialog.open(AddWorkflowDialogComponent,dialogconfig);
}
  

}
