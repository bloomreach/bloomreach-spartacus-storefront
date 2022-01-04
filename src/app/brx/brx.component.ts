import {
  Component,
  Inject,
  InjectionToken,
  Input,
  OnInit,
  Optional,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BrPageComponent } from '@bloomreach/ng-sdk';
import { Page } from '@bloomreach/spa-sdk';
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
  configuration: BrPageComponent['configuration'];

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
