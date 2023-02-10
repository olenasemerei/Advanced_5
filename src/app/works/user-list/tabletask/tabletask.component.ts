import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tabletask',
  templateUrl: './tabletask.component.html',
  styleUrls: ['./tabletask.component.scss']
})


export class TabletaskComponent {
  @Input()
  set newTask(task: string) {
    if (task) {
      this.taskArray.push({ name: task, status: false });
      this.count();
    }
  }

  @Output() countTask = new EventEmitter<number>();
  @Output() edit = new EventEmitter<number>();

  public taskArray: Array<{
    name: string;
    status: boolean;
  }> = [
    { name: 'HTML5', status: true },
    { name: 'CSS3', status: true },
    { name: 'SCSS', status: false },
    { name: 'JavaScript', status: false },
    { name: 'jQuerry', status: false },
    { name: 'Angular', status: false },
  ];

  constructor() {}

  ngOnInit(): void {
    this.count();
  }

  count(): void {
    this.countTask.emit(this.taskArray.length);
  }

  changeStatus(index: number): void {
    this.taskArray[index].status = !this.taskArray[index].status;
  }

  deleteTask(index: number): void {
    this.taskArray.splice(index, 1);
    this.count();
  }

  editTask(index: number): void {
    this.edit.emit(index);
  }
}