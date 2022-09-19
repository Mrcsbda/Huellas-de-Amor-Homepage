import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes:Routes=[
    {
        path:'',
        loadChildren:()=>import('./home/home.module').then((m)=>m.HomeModule),
        pathMatch:'full'
    },
    {
        path:'',
        loadChildren:()=>import('./adopt/adopt.module').then((m)=>m.AdoptModule)
    },
    {
        path:'',
        loadChildren:()=>import('./alliances/alliances.module').then((m)=>m.AlliancesModule)
    },
    {
        path:'',
        loadChildren:()=>import('./help-us/help-us.module').then((m)=>m.HelpUsModule)
    },
    {
        path:'',
        loadChildren:()=>import('./contact/contact.module').then((m)=>m.ContactModule)
    },
    {
        path:'**',
        redirectTo:''
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {
}