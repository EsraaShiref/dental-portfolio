import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skillGroups = [
    {
      title: 'Clinical Skills',
      desc: 'Direct patient care and procedures',
      colorClass: 'border-secondary',
      iconBg: 'icon-secondary',
      badgeClass: 'badge-muted',
      skills: [
        'Infection Control', 'Local Anesthesia', 'Rubber Dam Placement',
        'Laser Bleaching', 'Composite Restorations', 'Esthetic Dentistry',
        'Dental Loupes (Owner)',
      ],
    },
    {
      title: 'Professional & Technical',
      desc: 'Specialized dental disciplines',
      colorClass: 'border-primary',
      iconBg: 'icon-primary',
      badgeClass: 'badge-primary',
      skills: [
        'Endodontics', 'Rotary Endo', 'Apex Locator',
        'Pediatric Dentistry', 'Fixed Prosthodontics',
        'Minor Oral Surgery', 'Dental Photography',
      ],
    },
    {
      title: 'Software & Marketing',
      desc: 'Digital tools and practice growth',
      colorClass: 'border-accent',
      iconBg: 'icon-accent',
      badgeClass: 'badge-accent',
      skills: [
        'Exocad', 'Digital Smile Design (DSD)',
        'Microsoft Office', 'Social Media Marketing',
        'Patient Communication',
      ],
    },
  ];
}
