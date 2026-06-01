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
      borderColor: 'border-t-secondary',
      iconBg: 'bg-secondary/10',
      iconColor: 'text-secondary',
      skills: [
        'Infection Control', 'Local Anesthesia', 'Rubber Dam Placement',
        'Laser Bleaching', 'Composite Restorations', 'Esthetic Dentistry',
        'Dental Loupes (Owner)',
      ],
      badgeClass: 'bg-muted text-foreground hover:bg-secondary/20 transition-transform hover:scale-105 cursor-default',
    },
    {
      title: 'Professional & Technical',
      desc: 'Specialized dental disciplines',
      borderColor: 'border-t-primary',
      iconBg: 'bg-primary/10',
      iconColor: 'text-primary',
      skills: [
        'Endodontics', 'Rotary Endo', 'Apex Locator',
        'Pediatric Dentistry', 'Fixed Prosthodontics',
        'Minor Oral Surgery', 'Dental Photography',
      ],
      badgeClass: 'bg-primary/10 text-primary hover:bg-primary/25 transition-transform hover:scale-105 cursor-default',
    },
    {
      title: 'Software & Marketing',
      desc: 'Digital tools and practice growth',
      borderColor: 'border-t-accent',
      iconBg: 'bg-accent/10',
      iconColor: 'text-accent',
      skills: [
        'Exocad', 'Digital Smile Design (DSD)',
        'Microsoft Office', 'Social Media Marketing',
        'Patient Communication',
      ],
      badgeClass: 'bg-accent/10 text-accent-foreground hover:bg-accent/25 transition-transform hover:scale-105 cursor-default',
    },
  ];
}
