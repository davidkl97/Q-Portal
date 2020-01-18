import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-workflow-dialog',
  templateUrl: './add-workflow-dialog.component.html',
  styleUrls: ['./add-workflow-dialog.component.css']
})
export class AddWorkflowDialogComponent implements OnInit {

  generalWorkflowForm: FormGroup;
  WorkflowTypeForm: FormGroup;
  WorkflowDetailsForm: FormGroup;
  constructor(
    private dialogRef: MatDialogRef<AddWorkflowDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any, private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.generalWorkflowForm = this._formBuilder.group({
      templateName: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.WorkflowTypeForm = this._formBuilder.group({
      workflowType: ['', Validators.required],
      template_id: ['']
    });
    this.WorkflowDetailsForm = this._formBuilder.group({
      inputs: ['', Validators.required],
      permissions: ['',Validators.required],
      state: ['',Validators.required]
    });
  }
  close() {
    this.dialogRef.close();
  }

}
