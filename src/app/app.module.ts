import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMenuComponent } from './components/shared/app-menu/app-menu.component';
import { MaterialModule } from './material.module';
import { ExploreModule } from './components/explore/explore.module';
import { AddNewModule } from './components/add-new/add-new.module';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { wellFeatureKey, wellReducer } from './reducer/well.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { WellEffects } from './effects/well.effects';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    MaterialModule,
    ExploreModule,
    AddNewModule,
    StoreModule.forRoot({ [wellFeatureKey]: wellReducer }),
    EffectsModule.forRoot([WellEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 10,
    }),
  ],
  providers: [
    {
      provide: 'USE_STORE',
      useValue: false,
    },
  ],
  declarations: [AppMenuComponent, AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
