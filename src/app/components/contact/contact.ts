import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

interface ContactForm {
  name:    string;
  email:   string;
  message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  readonly form = signal<ContactForm>({ name: '', email: '', message: '' });
  readonly submitted = signal(false);

  readonly isFormValid = computed(() => {
    const { name, email, message } = this.form();
    return (
      name.trim().length > 1 &&
      email.includes('@') &&
      email.includes('.') &&
      message.trim().length > 9
    );
  });

  updateField(field: keyof ContactForm, value: string): void {
    this.form.update(f => ({ ...f, [field]: value }));
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.isFormValid()) {
      this.submitted.set(true);
    }
  }

  resetForm(): void {
    this.form.set({ name: '', email: '', message: '' });
    this.submitted.set(false);
  }
}
