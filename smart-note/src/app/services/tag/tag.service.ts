import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TagService {
  tagList = [];
  tagList$ = new BehaviorSubject<Array<object>>(this.tagList);

  constructor(
    private http: HttpClient
  ) {
    this._updateTagList();
  }

  // add
  _addTag(name: String) {
    this.http.post('/api/addTag', {
      name: name
    })
    .subscribe((data) => {
      this._updateTagList();
    });
  }

  // delete
  _deleteTag(id) {
    this.http.post('/api/deleteTag', {
      id: id
    }).subscribe((data) => {
        this._updateTagList();
      });
  }

  // getlist
  _getTagList() {
    return this.http.get('/api/TagList');
  }

  _updateTagList() {
    this.http.get('/api/TagList')
      .subscribe((res) => {
        this.tagList$.next(res['data']);
      });
  }

}
