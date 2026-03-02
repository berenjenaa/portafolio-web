import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

interface Highlight {
  icon: string;
  title: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  readonly stats = signal<Stat[]>([
    { value: '3+',  label: 'Proyectos completados' },
    { value: '10+', label: 'Tecnologías en el stack' },
    { value: '2+',  label: 'Años de formación activa' },
  ]);

  readonly highlights = signal<Highlight[]>([
    {
      icon: '🏗️',
      title: 'Arquitectura de Software',
      description:
        'Diseño ecosistemas backend robustos: desde el modelado de la base de datos hasta el despliegue en la nube, asegurando escalabilidad y mantenibilidad desde el día uno.',
    },
    {
      icon: '⚡',
      title: 'APIs RESTful de Alto Rendimiento',
      description:
        'Construyo APIs asíncronas con FastAPI y Python que escalan sin degradar el rendimiento. Cada endpoint es diseñado con contratos claros, validación de datos y documentación automática.',
    },
    {
      icon: '🗄️',
      title: 'Modelado y Optimización SQL',
      description:
        'Dominio intermedio en SQL Server: diseño de esquemas relacionales normalizados, consultas optimizadas y auditorías de integridad de datos para garantizar la consistencia operativa.',
    },
  ]);

  readonly highlightCount = computed(() => this.highlights().length);
}
