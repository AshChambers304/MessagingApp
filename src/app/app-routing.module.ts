import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatsPageComponent } from './components/pages/chats-page/chats-page.component';
import { ContactsPageComponent } from './components/pages/contacts-page/contacts-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/chats', pathMatch: 'full' },
  { path: 'chats', component: ChatsPageComponent },
  { path: 'contacts', component: ContactsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
