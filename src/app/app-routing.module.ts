import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotCreateComponent } from './components/bot-create/bot-create.component';
import { BotEditComponent } from './components/bot-edit/bot-edit.component';
import { BotListComponent } from './components/bot-list/bot-list.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [

  {
    path: 'config-bot',
    component: BotListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-config-bot',
    component: BotCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-config-bot/:id',
    component: BotCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
