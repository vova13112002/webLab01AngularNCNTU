import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainApiComponent } from './main-api/main-api.component';
import { NewServiceService } from './new-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactuComponent } from './contactu/contactu.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactGuard } from './guards/contact.guard';
import { ExitGuard } from './guards/exit.guard';
import { FormsComponent } from './forms/forms.component';
const appRoutes: Routes = [
  {
    path: 'contactu',
    component: ContactuComponent,
    canActivate: [ContactGuard]
  },//путь і компонент до Контактів
  {
    path: 'git',
    component: MainApiComponent,
    canDeactivate: [ExitGuard]
  },//путь і компонент до Резюме
  {
    path: 'forms',
    component: FormsComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    MainApiComponent,
    ContactuComponent,
    FormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)//які адреса будуть відслідовуватися і передаємо змінну з адресами
  ],
  providers: [NewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }