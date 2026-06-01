import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { WA_LINK } from '../../services/portfolio-data.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  animations: [
    trigger('successEnter', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('200ms ease', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
    ]),
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  waLink = WA_LINK;
  submitted = signal(false);
  today = new Date().toISOString().split('T')[0];

  contactInfos = [
    { icon: 'phone', label: 'Phone', value: '+201028654881', href: 'tel:+201028654881' },
    { icon: 'mail', label: 'Email', value: 'wagdyahmed304@gmail.com', href: 'mailto:wagdyahmed304@gmail.com' },
    { icon: 'map', label: 'Location', value: 'Tanta, Egypt', href: null },
  ];

  form = this._fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName:  ['', [Validators.required, Validators.minLength(2)]],
    email:     ['', [Validators.required, Validators.email]],
    phone:     ['', [Validators.required, Validators.minLength(8)]],
    date:      ['', Validators.required],
    message:   [''],
  });

  constructor(private _fb: FormBuilder) {}

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { firstName, lastName, email, phone, date, message } = this.form.value;
    const name = [firstName, lastName].filter(Boolean).join(' ');
    const msg =
      `مرحبا دكتور احمد\n` +
      `• الاسم: ${name}\n` +
      `• الهاتف: ${phone || '—'}\n` +
      `• الإيميل: ${email || '—'}\n` +
      `• التاريخ: ${date || '—'}\n` +
      `• سبب الحجز: ${message || '—'}`;
    const whatsappUrl = `https://wa.me/201028654881?text=${encodeURIComponent(msg)}`;

    this.submitted.set(true);
    this.form.reset();
    window.open(whatsappUrl, '_blank');
    setTimeout(() => this.submitted.set(false), 5000);
  }

  isInvalid(field: string) {
    const ctrl = this.form.get(field);
    return ctrl?.invalid && ctrl?.touched;
  }
}
