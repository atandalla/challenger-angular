import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BotListComponent } from './components/bot-list/bot-list.component';

//New Imports
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http"; 
import { InterceptorService } from './interceptors/interceptor.service';
import { BotCreateComponent } from './components/bot-create/bot-create.component';
import { FormsModule } from '@angular/forms';
import { BotEditComponent } from './components/bot-edit/bot-edit.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BotListComponent,
    BotCreateComponent,
    BotEditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
