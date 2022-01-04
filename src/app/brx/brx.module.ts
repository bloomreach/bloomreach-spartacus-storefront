import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrSdkModule } from '@bloomreach/ng-sdk';
import { environment } from '../../environments/environment';
import { SpartacusModule } from '../spartacus/spartacus.module';
import { BrxComponent, ENDPOINT } from './brx.component';
import { IsExternalLinkPipe } from './pipes/is-external-link.pipe';
import { IsInternalLinkPipe } from './pipes/is-internal-link.pipe';
import { ParseUrlPipe } from './pipes/parse-url.pipe';
import { FooterComponent } from './templates/footer/footer.component';
import { HeaderComponent } from './templates/header/header.component';
import { BrxPixelComponent } from './templates/brxpixel/brx-pixel.component';

@NgModule({
  declarations: [
    IsExternalLinkPipe,
    IsInternalLinkPipe,
    ParseUrlPipe,
    BrxComponent,
    HeaderComponent,
    FooterComponent,
    BrxPixelComponent,
  ],
  imports: [CommonModule, BrSdkModule, RouterModule, SpartacusModule],
  exports: [BrxComponent],
  providers: [{ provide: ENDPOINT, useValue: environment.endpoint }],
})
export class BrxModule {}
