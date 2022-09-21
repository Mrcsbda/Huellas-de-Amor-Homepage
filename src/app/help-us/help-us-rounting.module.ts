import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {HelpUsComponent} from "./help-us.component";

const routes:Routes=[
    {
        path:'ayudanos',
        component:HelpUsComponent
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class HelpUsRoutingModule {
}
