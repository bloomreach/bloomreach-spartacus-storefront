import { NgModule } from '@angular/core';
import { CmsConfig, I18nConfig, provideConfig } from '@spartacus/core';
import { productVariantsTranslationChunksConfig, productVariantsTranslations } from '@spartacus/product/variants/assets';
import { ProductVariantsRootModule, PRODUCT_VARIANTS_FEATURE } from '@spartacus/product/variants/root';

@NgModule({
  declarations: [],
  imports: [
    ProductVariantsRootModule
  ],
  providers: [provideConfig({
    featureModules: {
      [PRODUCT_VARIANTS_FEATURE]: {
        module: () =>
          import('@spartacus/product/variants').then((m) => m.ProductVariantsModule),
      },
    }
  } as CmsConfig),
  provideConfig({
    i18n: {
      resources: productVariantsTranslations,
      chunks: productVariantsTranslationChunksConfig,
    },
  } as I18nConfig)
  ],
})
export class ProductVariantsFeatureModule { }
