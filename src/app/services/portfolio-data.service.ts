import { Injectable } from '@angular/core';
import { GalleryImage, NavLink, Testimonial, Certificate } from '../models';

export const WA_LINK = 'https://wa.me/201028654881?text=Hello%20Dr.%20Ahmed,%20I%20would%20like%20to%20book%20an%20appointment';

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {

  readonly navLinks: NavLink[] = [
    { name: 'Home', href: 'hero' },
    { name: 'About', href: 'about' },
    { name: 'Education', href: 'education' },
    { name: 'Portfolio', href: 'portfolio' },
    { name: 'Skills', href: 'skills' },
    { name: 'Contact', href: 'contact' },
  ];

  readonly restorativeImages: GalleryImage[] = [
    ...Array.from({ length: 7 }, (_, i) => [
      { src: `assets/Restorative/restorative-${i + 1}-before.jpeg`, label: `Restorative ${i + 1} Before` },
      { src: `assets/Restorative/restorative-${i + 1}-after.jpeg`, label: `Restorative ${i + 1} After` },
    ]).flat(),
    ...Array.from({ length: 6 }, (_, i) => ({
      src: `assets/Restorative/restorative-Step${i + 1}.jpeg`,
      label: `Restorative Step ${i + 1}`,
    })),
  ] as GalleryImage[];

  readonly prosthodonticsImages: GalleryImage[] = Array.from({ length: 4 }, (_, i) => [
    { src: `assets/Prosthodontics/prosthodontics-${i + 1}-before.jpeg`, label: `Prosthodontics ${i + 1} Before` },
    { src: `assets/Prosthodontics/prosthodontics-${i + 1}-after.jpeg`, label: `Prosthodontics ${i + 1} After` },
  ]).flat() as GalleryImage[];

  readonly prosthodonticsVideo = 'assets/Prosthodontics/prosthodontics-video.mp4';

  readonly endodonticImages: GalleryImage[] = Array.from({ length: 28 }, (_, i) => {
    const num = i + 1;
    const isXray = [8, 11, 14, 16, 17, 18, 19, 23, 24, 25, 27].includes(num);
    return {
      src: `assets/Endodontic/endodontic-${num}${isXray ? '-Xray' : ''}.jpeg`,
      label: `Endodontic Case ${num}`,
    };
  });

  readonly surgeryImages: GalleryImage[] = [
    ...Array.from({ length: 4 }, (_, i) => [
      { src: `assets/Surgery/surgery-${i + 1}-before.jpeg`, label: `Surgery ${i + 1} Before` },
      { src: `assets/Surgery/surgery-${i + 1}-after.jpeg`, label: `Surgery ${i + 1} After` },
    ]).flat(),
    ...Array.from({ length: 4 }, (_, i) => ({
      src: `assets/Surgery/surgery-Xray-${i + 1}.jpeg`,
      label: `Surgery X-ray ${i + 1}`,
    })),
  ] as GalleryImage[];

  readonly bleachingImages: GalleryImage[] = [
    { src: 'assets/Bleaching/bleaching-1-before.jpeg', label: 'Bleaching Before' },
    { src: 'assets/Bleaching/bleaching-1-after.jpeg', label: 'Bleaching After' },
    { src: 'assets/Bleaching/bleaching-1-fullCase.jpeg', label: 'Bleaching Full Case' },
  ];

  readonly certificates: Certificate[] = [
    { title: 'Endodontic Course', icon: 'microscope' },
    { title: 'Orthodontic Course', icon: 'smile' },
    { title: 'Minor Surgery Course', icon: 'scissors' },
    { title: 'Composite Course', icon: 'sparkles' },
    { title: 'Rotary Endodontics', icon: 'heart-pulse' },
    { title: 'Apex Locator Course', icon: 'shield-check' },
    { title: 'Pediatric Dentistry', icon: 'smile' },
    { title: 'Laser Bleaching', icon: 'sparkles' },
    { title: 'Dental Photography', icon: 'camera' },
    { title: 'Exocad & DSD Software', icon: 'microscope' },
    { title: 'Dental Practice Marketing', icon: 'heart-pulse' },
  ];

  readonly testimonials: Testimonial[] = [
    {
      name: 'Nour A.',
      title: 'Composite Restoration Patient',
      review: 'Dr. Ahmed completely restored four of my front teeth with composite resin, and the results were flawless. What impressed me most was his attention to detail — each tooth was shaped and polished to match the others perfectly. The procedure was essentially pain-free and he explained every step as he worked. I left feeling like I had a brand new smile.',
    },
    {
      name: 'Mohamed K.',
      title: 'Laser Bleaching Patient',
      review: "I was skeptical about bleaching because I'd heard it causes sensitivity, but Dr. Ahmed's laser protocol was completely different. He applied a protective gel beforehand and monitored the whole session closely. My teeth went up several shades in a single appointment. The professionalism and hygiene in the clinic were second to none.",
    },
    {
      name: 'Rania T.',
      title: 'Wisdom Tooth Extraction Patient',
      review: "I was extremely anxious about having my wisdom tooth removed, but Dr. Ahmed put me at ease right away. He was calm, precise, and checked on my comfort throughout the procedure. I felt only slight pressure — no sharp pain at all. The post-operative instructions he gave me were thorough and the healing was smooth. I'd recommend him without hesitation.",
    },
    {
      name: 'Ahmed S.',
      title: 'Root Canal Treatment Patient',
      review: "Dr. Ahmed performed a root canal on one of my upper molars that had been causing severe pain for days. The relief was immediate after the first session. He uses a rotary system which made the process much faster than I expected, and the clinic's sterilization standards were clearly top-tier. I felt completely safe and well looked after throughout.",
    },
  ];
}
