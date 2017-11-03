import { EditNoteComponent } from './page/edit-note/edit-note.component';
import { ViewNoteComponent } from './page/view-note/view-note.component';
import { ClassificationComponent } from './page/classification/classification.component';
import { TagComponent } from './page/tag/tag.component';
import { SearchComponent } from './page/search/search.component';
import { AddLinkNoteComponent } from './page/add-link-note/add-link-note.component';
import { IndexComponent } from './page/index/index.component';
import { AppComponent } from './app.component';
import { AddNoteComponent } from './page/add-note/add-note.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'addNote',
    component: AddNoteComponent,
    children: []
  },
  {
    path: 'addLinkNote',
    component: AddLinkNoteComponent,
    children: []
  },
  {
    path: 'tag',
    component: TagComponent,
    children: []
  },
  {
    path: 'classification',
    component: ClassificationComponent,
    children: []
  },
  {
    path: 'search',
    component: SearchComponent,
    children: []
  },
  {
    path: 'viewNote',
    component: ViewNoteComponent,
    children: []
  },
  {
    path: 'editNote',
    component: EditNoteComponent,
    children: []
  },
  {
    path: '**',
    redirectTo: 'index',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
