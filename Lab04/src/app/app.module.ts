import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { HttpClientModule } from '@angular/common/http';
import { MainApiComponent } from './main-api/main-api.component';
import { NewServiceService } from './new-service.service';
import { FormsModule } from '@angular/forms';
import { ContactuComponent } from './contactu/contactu.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: AppComponent },//путь і компонент до головної сторінки
  { path: 'contactu', component: ContactuComponent },//путь і компонент до Контактів
  { path: 'git', component: MainApiComponent }//путь і компонент до Резюме
]
@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
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