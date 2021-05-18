import { Pipe, PipeTransform, OnInit } from '@angular/core';
import { User } from './_models/user';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {


  transform(users: User[], searchValue: string): User[] {

    if (!users || !searchValue) {
      return users;
    }
    return users.filter(user =>
      user.userName.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1);
  }

}
