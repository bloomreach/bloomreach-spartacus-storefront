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
