import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AffiliateComponent } from './affiliate/affiliate.component';
import { AffiliateTermsComponent } from './affiliate-terms/affiliate-terms.component';
import { AffiliateFormComponent } from './affiliate-form/affiliate-form.component';
import { VerificationComponent } from './verification/verification.component';
import { VerificationFormComponent } from './verification-form/verification-form.component';
import { EstateComponent } from './estate/estate.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { NavbarFooterComponent } from './navbar-footer/navbar-footer.component';
import { NavbarHeaderComponent } from './navbar-header/navbar-header.component';
import { HomeComponent } from './home/home.component';
import { OurBlogComponent } from './our-blog/our-blog.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { VNEPComponent } from './v-n-e-p/v-n-e-p.component';
import { NineInvestmentChecklistComponent } from './nine-investment-checklist/nine-investment-checklist.component';
import { VerifiedEstatePropertyComponent } from './verified-estate-property/verified-estate-property.component';
import { DbmServiceComponent } from './dbm-service/dbm-service.component';
import { ProfileComponent } from './profile/profile.component';
import { ServiceOnTheWayComponent } from './service-on-the-way/service-on-the-way.component';
import { RegistrationComponent } from './registration/registration.component';
import { VepFormComponent } from './vep-form/vep-form.component';
import { VnepFormComponent } from './vnep-form/vnep-form.component';
import { BlogPostComponent } from './blog-post/blog-post.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "sign-in", component: SignInComponent },
  { path: "home", component: HomeComponent },
  { path: "affiliate", component: AffiliateComponent },
  { path: "affiliate-terms", component: AffiliateTermsComponent },
  { path: "affiliate-form", component: AffiliateFormComponent },
  { path: "verification", component: VerificationComponent },
  { path: "verification-form", component: VerificationFormComponent },
  { path: "estate", component: EstateComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "products", component: ProductsComponent },
  { path: "navbar-footer", component: NavbarFooterComponent },
  { path: "navbar-header", component: NavbarHeaderComponent },
  { path: "our-blog", component: OurBlogComponent },
  { path: "subscription", component: SubscriptionComponent },
  { path: "v-n-e-p", component: VNEPComponent },
  { path: "nine-investment-checklist", component: NineInvestmentChecklistComponent },
  { path: "verified-estate-property", component: VerifiedEstatePropertyComponent },
  { path: "dbm-service", component: DbmServiceComponent },
  { path: "profile", component: ProfileComponent },
  { path: "service-on-the-way", component: ServiceOnTheWayComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "vep-form", component: VepFormComponent },
  { path: "vnep-form", component: VnepFormComponent },
  { path: "blog-post/:blog_id", component: BlogPostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
    FormsModule
  ]
})
export class AppRoutingModule { }