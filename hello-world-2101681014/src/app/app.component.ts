import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hello-world';

  selectedIndex: number = -1;

  items: { header: string; type?: string; content: string }[] = [
    {
      header: 'Информация за мен',
      content:
        'Здравейте, аз съм Станислава Павлова, 3 курс, софтуерни технологии и дизайн',
    },
    {
      header: 'Хобита и интереси',
      content: 'Програмиране 💻, волейбол 🏐, пътувания 🚗',
    },
    {
      header: 'Любим content creator',
      type: 'link',
      content: 'https://www.youtube.com/@YesTheory',
    },
  ];

  toggleAccordion(index: number): void {
    if (this.selectedIndex === index) {
      this.selectedIndex = -1;
    } else {
      this.selectedIndex = index;
    }
  }
}
