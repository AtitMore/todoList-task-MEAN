import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServerService } from './server.service';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

   form: FormGroup

   constructor(private fb: FormBuilder, private serverService: ServerService) { }

   submitt: any;
   taskListic: any;
   taskListc: any;
   taskList: any;
   cond: any;

   //Onload displayy data
   ngOnInit() {
      this.form = this.fb.group({
         task: ['', Validators.required]
      });

      this.serverService.displayTask()
         .subscribe(response => {
            this.cond = response.data;
            this.taskList = response.data;
            console.log(this.taskList);
            let arr1 = [];
            let arr2 = [];

            this.cond.forEach(element => {
               if (element.status == 'incomplete') {
                  arr1.push(element);
                  this.taskListic = arr1;
                  console.log(this.taskListic);
               }
               if (element.status == 'complete') {
                  arr2.push(element);
                  this.taskListc = arr2;
                  console.log(this.taskListc);
               }
            });
            
         })
   };
   //Delete task
   deleteTask(id) {
      let data = {
         id: id
      }
      this.serverService.deleteTask(data)
         .subscribe(response => {
         })
      this.ngOnInit();
   }

   //onchange checkbox functionality
   checkTask(status, id) {
      const data = {
         id: id,
         status: status,
         type: 'checkbox'
      }
      console.log(data)
      this.serverService.insertTask(data)
         .subscribe(response => {
         })
         this.ngOnInit();
         // setTimeout(function () {
         //    this.ngOnInit();
         // }, 2000)
   }

   trackByFn(index: any, item: any) {
      return index;
   }

   get f() { return this.form.controls; }

   //onSubmiting Add task methods 
   onSubmit() {
      let formValue = this.form.value;

      const data = {
         task_name: formValue.task,
         status: 'incomplete',
         type: 'direct'
      }

      this.submitt = true;

      if (this.form.invalid) {
         return;
      }

      this.serverService.insertTask(data)
         .subscribe(response => {
         })
      this.ngOnInit();
   }

}
