import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  postsList: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getList().subscribe((response: any[]) => {
      this.postsList = response;
    });
  }


  ngAfterViewChecked(){
    this.focusOnItemAtIndex(50);
  }


  
  focusOnItemAtIndex(index: number) {
    let element = document.getElementById(`${index}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      element.focus();
    }
  }
}
