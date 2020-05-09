
import { RouterModule, Routes} from '@angular/router';
import { SiteComponent } from './site/site.component';

const appRoutes: Routes = [
    {path: '', component: SiteComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});