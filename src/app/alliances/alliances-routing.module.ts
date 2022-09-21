import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {AlliancesComponent} from "./alliances.component";

const routes:Routes=[
    {
        path:'alianzas',
        component:AlliancesComponent
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
export class AlliancesRoutingModule {
}
