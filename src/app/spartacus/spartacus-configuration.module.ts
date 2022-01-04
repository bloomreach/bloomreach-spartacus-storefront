import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from '@spartacus/assets';
import {ConfigModule, FeaturesConfig, I18nConfig, OccConfig, provideConfig, SiteContextConfig} from '@spartacus/core';
import { defaultCmsContentProviders, layoutConfig, mediaConfig } from '@spartacus/storefront';
import { defaultImportEntriesLayoutConfig } from './default-import-entries-layout.config';
import { importExportTranslationChunksConfig, importExportTranslations } from '@spartacus/cart/import-export/assets';
import { quickOrderTranslationChunksConfig, quickOrderTranslations } from '@spartacus/cart/quick-order/assets'
import { defaultSavedCartFormLayoutConfig } from './default-saved-cart-form-layout.config';

@NgModule({
  declarations: [],
  imports: [
    ConfigModule.withConfig({
      routing: {
        routes: {
          product: { paths: ['product/:productCode'] },
          category: { paths: ['category/:categoryCode', 'category'] },
          search: { paths: ['search/:query', 'search'] },
          login: { paths: ['sign-in'] },
          forgotPassword: { paths: ['sign-in/forgot-password'] },
          resetPassword: { paths: ['sign-in/pw/change'] },
          register: { paths: ['register'] },
        }
      }
    })
  ],
  providers: [provideConfig(layoutConfig), provideConfig(mediaConfig), ...defaultCmsContentProviders, provideConfig(<OccConfig> {
    backend: {
      occ: {
        baseUrl: 'https://api.cvbrtj6s9u-bloomreac1-d1-public.model-t.cc.commerce.ondemand.com', prefix: '/occ/v2/'
      }
    },
  }), provideConfig(<SiteContextConfig> {
    context: {
      currency: ['USD'],
      language: ['en'],
      baseSite: ['pacificSupply']
    },
  }), provideConfig(<I18nConfig> {
    i18n: {
      resources: translations,
      chunks: translationChunksConfig,
      fallbackLang: 'en'
    },
  }), provideConfig(<I18nConfig> {
    i18n: {
      resources: importExportTranslations,
      chunks: importExportTranslationChunksConfig,
      fallbackLang: 'en'
    },
  }), provideConfig(<I18nConfig> {
    i18n: {
      resources: quickOrderTranslations,
      chunks: quickOrderTranslationChunksConfig,
      fallbackLang: 'en'
    },
  }), provideConfig(<FeaturesConfig>{
    features: {
      level: '4.0'
    }
  }), provideConfig(defaultImportEntriesLayoutConfig),
    provideConfig(defaultSavedCartFormLayoutConfig),
  ]
})
export class SpartacusConfigurationModule { }


