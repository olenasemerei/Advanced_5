import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  public isButton = true;
  public inputWrongLogin = false;
  public inputWrongPassword = false;
  public inputWrongEmail = false;
  public userIndex!: number;
  public user = {
    login: '',
    password: '',
    email: '',
  };

  public regExp = {
    login: /^[\w_\-.]{2,20}$/,
    password: /^[\w_\-.\S]{2,20}$/,
    email: /^[a-z0-9_\-.]+@[a-z.]+\.[a-z]+$/,
  };

  public usersArray: Array<{
    login: string;
    password: string;
    email: string;
  }> = [];

  constructor() {}

  ngOnInit(): void {}

  addUser(): void {
    if (!this.checkInput()) {
      return;
    }
    this.usersArray.push(this.createNewUser());
    this.clearInput();
  }

  checkInput(): boolean {
    if (!this.regExp.login.test(this.user.login)) {
      this.inputWrongLogin = true;
      return false;
    } else {
      this.inputWrongLogin = false;
    }
    if (!this.regExp.password.test(this.user.password)) {
      this.inputWrongPassword = true;
      return false;
    } else {
      this.inputWrongPassword = false;
    }
    if (!this.regExp.email.test(this.user.email)) {
      this.inputWrongEmail = true;
      return false;
    } else {
      this.inputWrongEmail = false;
    }
    return true;
  }

  createNewUser() {
    return {
      login: this.user.login,
      password: this.user.password,
      email: this.user.email,
    };
  }

  clearInput(): void {
    this.user.login = '';
    this.user.password = '';
    this.user.email = '';
  }

  deleteUser(index: number): void {
    this.usersArray.splice(index, 1);
  }

  editUser(index: number): void {
    this.isButton = false;
    this.user.login = this.usersArray[index].login;
    this.user.password = this.usersArray[index].password;
    this.user.email = this.usersArray[index].email;
    this.userIndex = index;
  }

  saveEditUser(): void {
    if (!this.checkInput()) {
      return;
    }
    this.usersArray[this.userIndex] = this.createNewUser();
    this.isButton = true;
    this.clearInput();
  }
}
