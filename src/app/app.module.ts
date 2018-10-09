import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';

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

// Angular Firebase Setup

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from "@angular/fire/database";

//angualr bootstrap
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';

//Forms module
import { FormsModule } from '@angular/forms';

//Toastr Module
import { ToastrModule  } from 'ngx-toastr';

@NgModule({
  entryComponents: [
    EditDetailsComponent
  ],

  declarations: [
    AppComponent,
    UsersComponent,
    DetailsComponent,
    ModalComponent,
    EditDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    //or AngularFireModule.initializeApp(environment.firebase)
    AngularFireModule.initializeApp(environment.firebase, 'ng6-proj'),
    AngularFireDatabaseModule,
    NgbModule.forRoot(),
    FormsModule,
    ToastrModule.forRoot()

  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
