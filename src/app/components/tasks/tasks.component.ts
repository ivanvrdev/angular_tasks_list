import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{
  tasks: Task[] = []

  constructor(private TasksService: TasksService) {
    
  }

  ngOnInit(): void {
    this.TasksService.getTasks().subscribe(tasks => {this.tasks = tasks})
  }

  deleteTask(task: Task){
    this.TasksService.deleteTask(task)
    .subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id)
    })
  }

  toggleRemider(task: Task){
    task.reminder = !task.reminder
    this.TasksService.updateTaskReminder(task).subscribe()
  }

  addTask(task: Task) {
    this.TasksService.addTask(task).subscribe(task => {
      this.tasks.push(task)
    })
  }
}
