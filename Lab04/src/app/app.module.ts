import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainApiComponent } from './main-api/main-api.component';
import { NewServiceService } from './new-service.service';
import { FormsModule } from '@angular/forms';
import { ContactuComponent } from './contactu/contactu.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactGuard } from './guards/contact.guard';

const appRoutes: Routes = [
  {
    path: 'contactu',
    component: ContactuComponent,
    canActivate: [ContactGuard]
  },//путь і компонент до Контактів
  {
    path: 'git',
    component: MainApiComponent
  }//путь і компонент до Резюме
]
@NgModule({
  declarations: [
    AppComponent,
    MainApiComponent,
    ContactuComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)//які адреса будуть відслідовуватися і передаємо змінну з адресами
  ],
  providers: [NewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }