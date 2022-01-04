import { DIALOG_TYPE, LayoutConfig } from '@spartacus/storefront';
import { SavedCartFormDialogComponent } from '@spartacus/cart/saved-cart/components';

export const defaultSavedCartFormLayoutConfig: LayoutConfig = {
  launch: {
    SAVED_CART: {
      inline: true,
      component: SavedCartFormDialogComponent,
      dialogType: DIALOG_TYPE.DIALOG,
    },
  },
};
