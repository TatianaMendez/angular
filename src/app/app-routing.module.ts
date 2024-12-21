import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinishComponent, SelphiComponent, SelphidComponent, VideoRecruitmentComponent, WidgetsComponent } from './components';

const routes: Routes = [
  { path: 'finish', component: FinishComponent, pathMatch: 'full' },
  {
    path: 'widgets', component: WidgetsComponent, children: [
      { path: 'step-1', component: SelphidComponent },
      { path: 'step-2', component: SelphiComponent },
      { path: 'step-3', component: VideoRecruitmentComponent },
    ]
  },
  { path: '**', redirectTo: 'widgets/step-1' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
