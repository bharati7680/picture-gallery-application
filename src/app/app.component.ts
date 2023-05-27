import { Component } from '@angular/core';
import { ImagesService } from './services/images.sevice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'picture-gallery-application';

  imagesList = []

  constructor(private imageService: ImagesService) { }

  ngOnInit(): void {
    //this.getMethod();

    this.imageService.imageslist().subscribe((result) => {
      console.log(result);
        // console.log(result.data.books)
        this.imagesList = result.urls
        
      
    })
}

}
