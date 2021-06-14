import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasboardComponent } from './dasboard/dasboard.component';
import { ProductcreateComponent } from './productcreate/productcreate.component';
import { ProducteditComponent } from './productedit/productedit.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductviewComponent } from './productview/productview.component';
import { UsercreateComponent } from './usercreate/usercreate.component';
import { UsereditComponent } from './useredit/useredit.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserviewComponent } from './userview/userview.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  } ,
  {
    path:"register",
    component:RegisterComponent
  } ,

  {
    path:"product",
    component:ProductComponent
  } ,
  {
    path:"user",
    component:UserComponent
  } ,

  {
    path :"" ,
    component: DasboardComponent 
  },

    {path:"productcreate",
    component:ProductcreateComponent
  },
  {
    path:"productlist",
    component:ProductlistComponent
    },
    {
      path:"productview/:id",
      component:ProductviewComponent
      },
      {
        path:"productedit",
        component:ProducteditComponent
        },
        {
          path:"usercreate",
          component:UsercreateComponent
          },
          {
            path:"userlist",
            component:UserlistComponent
            },
            {
              path:"useredit",
              component:UsereditComponent
              },
              {
                path:"userview/:id",
                component:UserviewComponent
                },
                
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
