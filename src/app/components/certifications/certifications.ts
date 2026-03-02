import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface Certification {
  title:        string;
  issuer:       string;
  date:         string;
  credentialId: string;
}

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.html',
  styleUrl: './certifications.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Certifications {
  readonly certifications = signal<Certification[]>([
    {
      title:        'SQL (Basic)',
      issuer:       'HackerRank',
      date:         '22 Dic 2025',
      credentialId: 'B5C68B3B1FEO',
    },
    {
      title:        'Diseño Web HTML5 + CSS',
      issuer:       'AIEP / Fundación Telefónica Movistar',
      date:         '21 Dic 2025',
      credentialId: 'f7d7f03f-c040-4582-b429-62449a013895',
    },
  ]);
}
