/*
 * Copyright 2022 BloomReach (https://www.bloomreach.com/)
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

import {
  Component,
  Inject,
  InjectionToken,
  Input,
  OnInit,
  Optional,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Page, Configuration } from '@bloomreach/spa-sdk';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { OutletPosition } from '@spartacus/storefront';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import {
  BannerComponent,
  SpartacusBannerComponent,
  SpartacusLoginFormComponent,
  SpartacusProductListComponent,
  SpartacusSearchBoxComponent,
  SpartacusProductDetailsComponent,
  SpartacusProductHighlightComponent,
  SpartacusProductFacetNavigationComponent,
  CategoryHighlightComponent,
  SpartacusParagraphComponent,
  SpartacusBreadcrumbComponent,
  MenuComponent,
  SpartacusRegisterComponent,
  SpartacusLoginRegisterComponent,
} from '@bloomreach/brx-spartacus-library';
import { HttpErrorResponse } from '@angular/common/http';
import { PageContext, RoutingService } from '@spartacus/core';

export const ENDPOINT = new InjectionToken<string>('brXM API endpoint');

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'brx-spartacus',
  templateUrl: './brx.component.html',
  styleUrls: ['./brx.component.scss'],
})
export class BrxComponent implements OnInit {
  configuration: Configuration;

  outletPosition = OutletPosition;

  mapping = {
    Banner: BannerComponent,
    SpartacusBanner: SpartacusBannerComponent,
    SpartacusLogin: SpartacusLoginFormComponent,
    SpartacusProductFacetNavigation: SpartacusProductFacetNavigationComponent,
    SpartacusProductList: SpartacusProductListComponent,
    SpartacusSearchBox: SpartacusSearchBoxComponent,
    SpartacusProductDetails: SpartacusProductDetailsComponent,
    ProductHighlight: SpartacusProductHighlightComponent,
    CategoryHighlight: CategoryHighlightComponent,
    SpartacusParagraph: SpartacusParagraphComponent,
    SpartacusBreadcrumb: SpartacusBreadcrumbComponent,
    menu: MenuComponent,
    SpartacusRegister: SpartacusRegisterComponent,
    SpartacusLoginRegister: SpartacusLoginRegisterComponent,
  };

  brxHttpError?: HttpErrorResponse;

  pageContext$?: Observable<PageContext>;

  private navigationEnd: Observable<NavigationEnd>;

  constructor(
    router: Router,
    private route: ActivatedRoute,
    private routingService: RoutingService,
    @Inject(ENDPOINT) endpoint?: string,
    @Inject(REQUEST) @Optional() request?: Request
  ) {
    this.configuration = {
      debug: true,
      endpoint,
      request,
      endpointQueryParameter: 'endpoint',
      path: router.url,
    } as BrxComponent['configuration'];

    this.navigationEnd = router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ) as Observable<NavigationEnd>;
  }

  ngOnInit(): void {
    this.navigationEnd.subscribe((event) => {
      const endPointFromParams = this.route.snapshot.queryParamMap.get('endpoint');
      if (endPointFromParams) { this.configuration = { ...this.configuration, endpoint: endPointFromParams }; }

      this.configuration = { ...this.configuration, path: event.url };
      this.brxHttpError = undefined;
      this.pageContext$ = this.routingService
        .getPageContext()
        .pipe(
          tap((pageContext) =>
            console.log('[BrxComponent.PageContext]: ', pageContext)
          )
        );
    });
  }

  setVisitor(page?: Page): void {
    this.configuration.visitor = page?.getVisitor();
  }

  onBrxHttpError(error: HttpErrorResponse): void {
    this.brxHttpError = error;
  }

  getPageTemplate(page: Page): string | undefined {
    return page?.getComponent().getName();
  }

  isCartContext(page: Page): boolean {
    return page.getUrl()?.includes('cart') || false;
  }
}
