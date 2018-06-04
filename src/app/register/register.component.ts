import { Component, OnInit } from '@angular/core';
import{AngularFireDatabase,AngularFireList} from 'angularfire2/database'
import{Observable} from 'rxjs/Observable'; 
import{AngularFireAuth} from 'angularfire2/auth';
import{ Router } from'@angular/router';
import { auth } from 'firebase';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  data= {

    name:'',
    stage:'',
   password:'',
    
    }
  
    itemList:AngularFireList<any>
    constructor(  private fire:AngularFireAuth , public db:AngularFireDatabase, public router:Router){

      this.itemList=db.list('Skills')
      this.data.name  = localStorage.getItem('name');
        this.data.stage= localStorage.getItem('stage');
    this.data.password=localStorage.getItem('paasword')
    
        this.data.name=  localStorage.getItem('name');
        console.log( 'name: ' + this.data.name);
    }
        ngOnInit() {
          console.log(this.data.name);
          console.log(this.data.stage);
          console.log(this.data.password);
        }
        insertSkill(){
          this.itemList.push({
            name:this.data.name,
            stage:this.data.stage,
            password:this.data.password,
          
          })
          this.router.navigate(['/home'])
          }
          
          }
          