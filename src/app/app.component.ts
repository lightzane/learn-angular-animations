import { OverlayContainer } from '@angular/cdk/overlay';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDarkTheme = localStorage.getItem('dark') ? true : false;
  title = 'learn-angular-animations';

  constructor(private overlayContainer: OverlayContainer) { }

  ngOnInit(): void {
    this.applyDarkThemeOnDialogs();
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    this.applyDarkThemeOnDialogs();
  }

  /**
   * To include dark-theme on dialog components.
   * Additional: Save `dark` theme mode to localStorage
   */
  applyDarkThemeOnDialogs(): void {
    if (this.isDarkTheme) {
      this.overlayContainer.getContainerElement().classList.add('mycustom-dark-theme');
      localStorage.setItem('dark', 'true');
    } else {
      this.overlayContainer.getContainerElement().classList.remove('mycustom-dark-theme');
      localStorage.removeItem('dark');
    }
  }

  resetTodos(): void {
    localStorage.removeItem('todos');
    window.location.reload();
  }
}
