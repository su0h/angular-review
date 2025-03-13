import { Component, computed, input, Input, output, signal } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user = input.required<User>();
  isSelected = input<boolean>();
  selectedUser = output<User>();

  imagePath = computed(() => {
    return './assets/users/' + this.user().avatar;
  });

  onSelectUser() {
    this.selectedUser.emit(this.user());
  }
}
