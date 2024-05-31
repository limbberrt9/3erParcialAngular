import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        data: {
          title: 'Base'
        },
        children: [
          {
            path: '',
            redirectTo: 'cards',
            pathMatch: 'full'
          },
          {
            path: 'notas',
            loadComponent: () => import('./notas/notas.component').then(m => m.NotasComponent),
            data: {
              title: 'Notas'
            }
          },
          {
            path: 'reporte',
            loadComponent: () => import('./reporte/reporte.component').then(m => m.ReporteComponent),
            data: {
              title: 'Reportes'
            }
          },
        ]
    }
]