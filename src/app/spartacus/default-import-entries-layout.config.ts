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

import { DIALOG_TYPE, LayoutConfig } from '@spartacus/storefront';
import { ImportEntriesDialogComponent } from '@spartacus/cart/import-export/components';

export const defaultImportEntriesLayoutConfig: LayoutConfig = {
  launch: {
    IMPORT_TO_CART: {
      inlineRoot: true,
      component: ImportEntriesDialogComponent,
      dialogType: DIALOG_TYPE.DIALOG,
    },
  },
};
