import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importez les composants nécessaires
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './features/auth/login/login.component';
import { ReservationListComponent } from './features/reservation/reservation-list/reservation-list.component';
import { CarListComponent } from './features/cars/car-list/car-list.component';
import { AdminDashboardComponent } from './features/admin/admin-dashboard/admin-dashboard.component';

// Importez les guards nécessaires
import { authGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },  // Chemin pour la page d'accueil
  { path: 'auth/login', component: LoginComponent },  // Route pour la connexion
  { path: 'reservation', component: ReservationListComponent, canActivate: [authGuard] },  // Route protégée pour la réservation
  { path: 'cars', component: CarListComponent },  // Route pour la liste des voitures
  { path: 'admin', component: AdminDashboardComponent, canActivate: [adminGuard] },  // Route protégée pour l'administration
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
