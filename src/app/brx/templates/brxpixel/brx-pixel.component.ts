import { environment } from '../../../../environments/environment';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-brx-pixel',
  templateUrl: './brx-pixel.component.html',
  styleUrls: ['./brx-pixel.component.scss'],
})
export class BrxPixelComponent implements OnInit, AfterViewInit {
  pageType = 'search';
  pageLabels = 'pacific,nut,bolt,commerce';
  type = 'pageview';

  ngOnInit(): void {}

  ngAfterViewInit() {
    if (/^\d+$/.test(environment.accountId)) {
      (window as any).br_data = {
        page_type: `${this.pageType ?? ''}`,
        page_labels: `${this.pageLabels ?? ''}`,
        acct_id: `${environment.accountId}`,
        type: `${this.type ?? ''}`,
      };

      if (environment.domainKey && environment.domainKey.trim() !== '') {
        (window as any).br_data.domain_key = `${environment.domainKey}`;
      }

      let node = document.createElement('script');
      node.src = `//cdns.brsrvr.com/v1/br-trk-${environment.accountId}.js`;
      node.async = true;
      node.type = 'text/javascript';
      const s = document.getElementsByTagName('script')[0];
      s.parentNode?.insertBefore(node, s);
    }
  }
}
