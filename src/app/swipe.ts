import { keyframes, style,animate } from '@angular/animations';

export const swiperight = [
  style({ opacity: 1 }),
  style({ transform: 'translate3d(200%, 0, 0) rotate3d(0, 0, 1, 120deg)', opacity: 0 }),
]

export const swipeleft = [
  style({ opacity: 1 }),
  style({ transform: 'translate3d(-200%, 0, 0) rotate3d(0, 0, 1, -120deg)', opacity: 0 }),
]

export const swipedown = [
    style({ opacity: 1 }),
    style({ transform: 'translate3d(0, 200%, 0) rotate3d(0, 0, 1, 120deg)', opacity: 0 }),
  ]