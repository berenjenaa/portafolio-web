import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  readonly name = signal('Benjamín Olave Barraza');

  readonly roles = signal([
    'Analista Programador Full Stack',
    'Arquitecto de APIs RESTful',
    'Desarrollador Backend & Frontend',
  ]);

  readonly currentRoleIndex = signal(0);

  readonly currentRole = computed(() => this.roles()[this.currentRoleIndex()]);

  readonly stack = signal(['Angular', 'React Native', 'Python', 'FastAPI', 'SQL Server', 'Cloud Run']);

  readonly available = signal(true);

  readonly statusText = computed(() =>
    this.available() ? 'Disponible para nuevas oportunidades' : 'No disponible'
  );
}
