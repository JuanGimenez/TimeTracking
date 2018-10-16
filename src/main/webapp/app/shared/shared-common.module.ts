import { NgModule } from '@angular/core';

import { TimeTrackingSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [TimeTrackingSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [TimeTrackingSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TimeTrackingSharedCommonModule {}
