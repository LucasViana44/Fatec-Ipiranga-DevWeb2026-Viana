import { Routes } from '@angular/router';
import { Cadastro } from './cadastro/cadastro';
import { Home } from './home/home';
import { Login } from './login/login';

export const routes: Routes = [
{path: 'cadastro', component: Cadastro},
{path: 'login', component: Login},
{path: 'home', component: Home},
{path: '', redirectTo: 'home', pathMatch: 'full' },
];
