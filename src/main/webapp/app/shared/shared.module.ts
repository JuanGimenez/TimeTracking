import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { TimeTrackingSharedLibsModule, TimeTrackingSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [TimeTrackingSharedLibsModule, TimeTrackingSharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [TimeTrackingSharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TimeTrackingSharedModule {}
