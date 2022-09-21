import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {AdoptComponent} from "./adopt.component";

const routes:Routes=[
    {
        path:'adopta',
        component:AdoptComponent
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
export class AdoptRoutingModule {
}
