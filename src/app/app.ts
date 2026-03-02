import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Certifications } from './components/certifications/certifications';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [Hero, About, Skills, Projects, Certifications, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  readonly title = signal('portafolio-benjamin');
}
