import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AffiliateComponent } from './affiliate/affiliate.component';
import { AffiliateTermsComponent } from './affiliate-terms/affiliate-terms.component';
import { AffiliateFormComponent } from './affiliate-form/affiliate-form.component';
import { HttpClientModule } from '@angular/common/http';
import { VerificationComponent } from './verification/verification.component';
import { VerificationFormComponent } from './verification-form/verification-form.component';
import { EstateComponent } from './estate/estate.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { NavbarHeaderComponent } from './navbar-header/navbar-header.component';
import { NavbarFooterComponent } from './navbar-footer/navbar-footer.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OurBlogComponent } from './our-blog/our-blog.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { VNEPComponent } from './v-n-e-p/v-n-e-p.component';
import { NineInvestmentChecklistComponent } from './nine-investment-checklist/nine-investment-checklist.component';
import { VerifiedEstatePropertyComponent } from './verified-estate-property/verified-estate-property.component';
import { DbmServiceComponent } from './dbm-service/dbm-service.component';
import { ProfileComponent } from './profile/profile.component';
import { ServiceOnTheWayComponent } from './service-on-the-way/service-on-the-way.component';
import { PostComponent } from './post/post.component';
import { RegistrationComponent } from './registration/registration.component';
import { VepFormComponent } from './vep-form/vep-form.component';
import { VnepFormComponent } from './vnep-form/vnep-form.component';
import { BlogPostComponent } from './blog-post/blog-post.component';

@NgModule({
  declarations: [
    AppComponent,
    AffiliateComponent,
    AffiliateTermsComponent,
    AffiliateFormComponent,
    VerificationComponent,
    VerificationFormComponent,
    EstateComponent,
    AboutUsComponent,
    ProductsComponent,
    NavbarHeaderComponent,
    NavbarFooterComponent,
    FormComponent,
    HomeComponent,
    OurBlogComponent,
    SubscriptionComponent,
    SignInComponent,
    VNEPComponent,
    NineInvestmentChecklistComponent,
    VerifiedEstatePropertyComponent,
    DbmServiceComponent,
    ProfileComponent,
    ServiceOnTheWayComponent,
    PostComponent,
    RegistrationComponent,
    VepFormComponent,
    VnepFormComponent,
    BlogPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
