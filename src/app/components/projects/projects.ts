import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface Project {
  id:          number;
  title:       string;
  subtitle:    string;
  description: string;
  stack:       string[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  readonly projects = signal<Project[]>([
    {
      id: 1,
      title: 'MisBoletas',
      subtitle: 'Plataforma Full Stack de Gestión de Garantías',
      description:
        'Aplicación móvil y web para la digitalización y gestión de garantías legales. Backend Python (FastAPI) conectado a SQL Server para asegurar la integridad documental, consumido por una interfaz React Native. Desplegado en Google Cloud Run.',
      stack: ['React Native', 'Python', 'FastAPI', 'SupaBase','PostgreSQL', 'Cloud Run'],
    },
    {
      id: 2,
      title: 'TI-Pulse',
      subtitle: 'Dashboard de Monitoreo de Servicios',
      description:
        'Herramienta de observabilidad con backend en Python y frontend en Angular. Ejecuta diagnósticos de red y consultas SQL automatizadas para verificar el estado de servidores en tiempo real, exponiendo los resultados a través de una API REST propia.',
      stack: ['Python', 'Angular', 'API REST', 'SQL'],
    },
    {
      id: 3,
      title: 'Data-Sync Bot',
      subtitle: 'Script de Automatización Backend',
      description:
        'Solución de automatización en Python para optimizar procesos de negocio. El script se conecta a SQL Server, audita registros específicos y ejecuta rutinas de actualización de forma autónoma, sin intervención manual.',
      stack: ['Python', 'SQL Server'],
    },
  ]);
}
