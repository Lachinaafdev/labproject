import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
})
export class PagesComponent {
  mainOptions: any[] = [
    { name: 'Home', icon: 'bi bi-house', router: '' },
    { name: 'Edificios', icon: 'bi bi-building', router: '' },
    { name: 'Laboratorios', icon: 'bi bi-bank', router: '' },
    { name: 'Horarios', icon: 'bi bi-calendar2-day', router: '' },
    { name: 'Usuarios', icon: 'bi bi-people', router: 'usuarios' },
    { name: 'Reservas', icon: 'bi bi-ticket-perforated', router: '' },
    { name: 'Roles', icon: 'bi bi-person-badge', router: 'roles' },
  ];

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(
    private observer: BreakpointObserver,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.observer.observe(['(max-width:800px)']).subscribe((response) => {
      if (response.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
    this.cdr.detectChanges();
  }

  public cerrarSesion(): void {
    localStorage.removeItem('user');
    location.reload();
  }
}
