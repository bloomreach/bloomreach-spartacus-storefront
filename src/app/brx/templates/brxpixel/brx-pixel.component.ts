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

  ngAfterViewInit(): void {
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

      const node = document.createElement('script');
      node.src = `//cdns.brsrvr.com/v1/br-trk-${environment.accountId}.js`;
      node.async = true;
      node.type = 'text/javascript';
      const s = document.getElementsByTagName('script')[0];
      s.parentNode?.insertBefore(node, s);
    }
  }
}
