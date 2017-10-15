import { Router } from '@angular/router';
import { MsgService } from '../services/msg/msg.service';
import { Subscription } from 'rxjs/Subscription';
import { AddNoteService } from '../services/add-note/add-note.service';
//import { TagDataService } from '../tag-data.service';
import { TagService } from '../services/tag/tag.service';
import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { dropdownItem } from '../component/dropdown/dropdown.component';
import { ActivatedRoute } from '@angular/router';
import { Tag } from '../tag';


@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddNoteComponent implements OnInit, OnDestroy {
  dropdownMenuSub: Subscription;
  dropdownMenu = [];
  title = '';
  content = '';
  tagList = [];
  tags: Tag[]  = [];
  constructor(
    private tagDataService: TagService,
    private addNoteService: AddNoteService,
    private msg: MsgService,
    private router: Router,
    private route: ActivatedRoute        
  ) { }

  ngOnInit() {
    this.route.data
    .map((data) => data['tags'])
    .subscribe(
      (tags) => {
        this.tags = tags;
      }
    );
  }

  ngOnDestroy() {
    this.dropdownMenuSub.unsubscribe();
  }

  selectItem(data) {
    this.tagList.push(data);
  }

  delectLabelItem(index) {
    this.tagList.splice(index, 1);
  }

  markdownValueChange(data) {
    this.content = data;
  }

  // save notes
  save() {
    //if (this.title === '' || this.content === '' || this.tagList.length === 0) {
      this.tagList.length = 1;
      
      if (this.title === '' || this.content === '' ) {
      this.msg.info('Please complete note information');
    } else {
      const sub = this.addNoteService._addNote({
        title: this.title,
        content: this.content,
        tag: this.tagList,
        date: new Date(),
        sourceLink: ''
      }).subscribe((res) => {
        if (res['code'] === 200) {
          this.msg.info('Successfully saved!');
          this.addNoteService._updateAllNote();
          localStorage.setItem('noteItemInfo', JSON.stringify(res['data']));
          this.router.navigate(['/viewNote']);
        }
      });
    }
  }
}
