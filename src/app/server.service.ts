import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()

export class ServerService {

    constructor(private http: HttpClient) { }

    //Insert The task    
    insertTask(body) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' })
        return this.http.post('api/todo_list/insert_todoList', body)
            .pipe(map((response: any) => response
            ));
    }

    //Display task in the list
    displayTask() {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' })
        return this.http.post('api/todo_list/display_task', {})
            .pipe(map((response: any) => response
            ));
    }
    
    //delete task
    deleteTask(data) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' })
        return this.http.post('api/todo_list/delete_task', data)
            .pipe(map((response: any) => response
            ));
    }
}