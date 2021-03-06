import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  slides: Array<any> = new Array<any>();

  about: string = `<p>We are a group of Filipino developers with the passion to share our knowledge to both Students and Professionals over some Beer and Pizza!
  We want to help our fellow Filipino Developers to be updated on the latest trends in technology by giving back to the community. We organize event meetups, trainings, seminars and 
  we also do workshops from time to time.</p>

  <br/> 

  <p>Lastly we choose Angular framework as our weapon of choice in building web applications, Angular is a JavaScript-based open-source front-end web application framework 
  mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications.</p>`;

  constructor(meta: Meta, title: Title) {

    const pageTitle: string = 'AngularPH - Home Page';
    
    title.setTitle(pageTitle);

    meta.updateTag({ name: 'keywords', content: 'angular, seo, angular universal, angularPH' });
    meta.updateTag({ name: 'description', content: this.about });
    meta.updateTag({ property: 'og:title', content: pageTitle });
    meta.updateTag({ property: 'og:description', content:  this.about });
    meta.updateTag({ property: 'og:image', content: 'assets/img/banners/angularph-meetup-banner2.jpg' });
  }

  ngOnInit() {
    this.slides.push({ image: 'assets/img/banners/angularph-meetup-banner2.jpg', caption: 'AngularPH', text: 'Learning and Working together.' });
    this.slides.push({ image: 'assets/img/banners/angularph-workshop-participants-banner2.jpg', caption: '', text: '' });
    this.slides.push({ image: 'assets/img/banners/angularph-workshop-banner2.jpg', caption: '', text: '' });
  }

}