import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ChatsPageComponent } from './components/pages/chats-page/chats-page.component';
import { ContactsPageComponent } from './components/pages/contacts-page/contacts-page.component';
import { ConversationComponent } from './components/shared/conversation/conversation.component';
import { ConversationListComponent } from './components/shared/conversation-list/conversation-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChatsPageComponent,
    ContactsPageComponent,
    ConversationComponent,
    ConversationListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
