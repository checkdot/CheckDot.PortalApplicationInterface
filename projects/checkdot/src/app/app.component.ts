import { AfterViewInit, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'testapp';

  public $theme: Observable<string>;

  constructor(public themeService: ThemeService) {
    this.$theme = this.themeService.$theme.asObservable();
  }
  ngAfterViewInit(): void {
    let w: any = window;

    w.loadMenu();
    w.loadGrid();
  }



}
