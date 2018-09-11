import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';

import { HttpClientModule } from '@angular/common/http';

// Font Awesome Integration
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab, faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
// Add an icon to the library for convenient access in other components
library.add(faTwitter);

import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
library.add(faHtml5);
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
library.add(faCss3Alt);
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
library.add(faJsSquare);
import { faAngular } from '@fortawesome/free-brands-svg-icons';
library.add(faAngular);
import { faSass } from '@fortawesome/free-brands-svg-icons';
library.add(faSass);
import { faLess } from '@fortawesome/free-brands-svg-icons';
library.add(faLess);
import { faGulp } from '@fortawesome/free-brands-svg-icons';
library.add(faGulp);
import { faNpm } from '@fortawesome/free-brands-svg-icons';
library.add(faNpm);
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
library.add(faLinkedin);
import { faGithub } from '@fortawesome/free-brands-svg-icons';
library.add(faGithub);
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
library.add(faFacebook);
import { faCheck } from '@fortawesome/free-solid-svg-icons';
library.add(faCheck);

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
