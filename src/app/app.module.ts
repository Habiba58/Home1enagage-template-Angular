import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { HeaderComponent } from './Components/header/header.component';
import { SecondSectionComponent } from './Components/second-section/second-section.component';
import { FeaturesComponent } from './Components/features/features.component';
import { LearnAboutUsComponent } from './Components/learn-about-us/learn-about-us.component';
import { ActivitiesComponent } from './Components/activities/activities.component';
import { OurServicesComponent } from './Components/our-services/our-services.component';
import { RecentWorkComponent } from './Components/recent-work/recent-work.component';
import { LatestNewsComponent } from './Components/latest-news/latest-news.component';
import { FeelingConvincedComponent } from './Components/feeling-convinced/feeling-convinced.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ShadowComponent } from './Components/shadow/shadow.component';
import { CarouselComponent } from './Components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    SecondSectionComponent,
    FeaturesComponent,
    LearnAboutUsComponent,
    ActivitiesComponent,
    OurServicesComponent,
    RecentWorkComponent,
    LatestNewsComponent,
    FeelingConvincedComponent,
    FooterComponent,
    ShadowComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
