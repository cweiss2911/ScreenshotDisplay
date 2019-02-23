import { Component, OnInit,  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(protected http: HttpClient, private sanitizer: DomSanitizer) {

  }

  isImageLoading: boolean;
  public image;
  public imageSrc;
  ngOnInit(): void {
    /**/

    this.http.get('/api/values', {responseType: 'text'})
      .subscribe(data => {
        this.image = data
        this.imageSrc = 'data:image/jpeg;base64,' + this.image;        
      }, error => {
        this.isImageLoading = false;
        console.log('error');
        console.log(error);
      });

    /**/
  }


  title = 'ImageDisplayFrontend';
}
