/*
 * Copyright 2022-2023 BloomReach (https://www.bloomreach.com/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrSdkModule } from '@bloomreach/ng-sdk';
import { SpartacusModule } from '../spartacus/spartacus.module';
import { BrxComponent } from './brx.component';
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
  providers: [],
})
export class BrxModule {}
