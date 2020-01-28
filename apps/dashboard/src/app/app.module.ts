import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@dashboard/material';
import { CoreDataModule } from '@dashboard/core-data';
import { RoutingModule } from './routing.module'
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectsDetailsComponent } from './projects/projects-details/projects-details.component';
import { FormsModule } from '@angular/forms';
import { UiLoginModule } from '@dashboard/ui-login'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreDataModule,
    FormsModule,
    UiLoginModule,
    RoutingModule
  ],
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectsListComponent,
    ProjectsDetailsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
