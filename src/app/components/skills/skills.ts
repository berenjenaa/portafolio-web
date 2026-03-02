import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

interface Skill {
  name: string;
  abbr: string;
  description: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  readonly frontendSkills = signal<Skill[]>([
    { name: 'React & React Native', abbr: 'RN',   description: 'SPAs y apps móviles cross-platform' },
    { name: 'Angular',              abbr: 'NG',   description: 'SPAs enterprise con SSR y Signals' },
    { name: 'JavaScript (ES6+)',    abbr: 'JS',   description: 'Async/await, módulos, DOM avanzado' },
    { name: 'HTML5 & CSS3',         abbr: 'WEB',  description: 'Layouts responsivos, Grid y Flexbox' },
  ]);

  readonly backendSkills = signal<Skill[]>([
    { name: 'Python (FastAPI)', abbr: 'PY',  description: 'APIs REST async de alto rendimiento' },
    { name: 'Java',             abbr: 'JV',  description: 'POO, patrones de diseño y backend' },
    { name: 'C# (.NET)',        abbr: 'C#',  description: 'APIs y servicios con arquitectura .NET' },
    { name: 'SQL Server',       abbr: 'SQL', description: 'Modelado relacional y consultas complejas' },
    { name: 'Google Cloud Run', abbr: 'GCR', description: 'Despliegue serverless de contenedores' },
    { name: 'Git / GitHub',     abbr: 'GIT', description: 'Control de versiones y flujos CI/CD' },
  ]);

  readonly totalSkills = computed(
    () => this.frontendSkills().length + this.backendSkills().length
  );
}
