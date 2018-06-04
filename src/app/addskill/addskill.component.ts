import { Component, OnInit } from '@angular/core';
import{AngularFireDatabase,AngularFireList} from 'angularfire2/database'
import{Observable} from 'rxjs/Observable'; 
import{AngularFireAuth} from 'angularfire2/auth';
import{ Router } from'@angular/router';
import { auth } from 'firebase';


@Component({
  selector: 'app-addskill',
  templateUrl: './addskill.component.html',
  styleUrls: ['./addskill.component.css']
})
export class addskillComponent implements OnInit {
// name:string='bilala'
// stage:string
// phone:string
// phonenumber:string
// phonenumber1:string
data= {

name:'',
stage:'',
phone: '',
fatherphone: '',
Emergencytelephon:'',
addres:'',
text:'',


}
email: string;
   myid: string;
uid:any;

itemList:AngularFireList<any>
constructor(  private fire:AngularFireAuth , public db:AngularFireDatabase, public router:Router){
  this.itemList=db.list('Skills')
  this.email = localStorage.getItem('email');
    this.myid = localStorage.getItem('uid');
    const user =  localStorage.getItem('email');
    this.email = user;

    this.uid =  localStorage.getItem('uid');
    console.log( 'uid: ' + this.uid);



  }

  ngOnInit() {
    console.log(this.email);
    console.log(this.myid);

  }


insertSkill(){
this.itemList.push({
  name:this.data.name,
  stage:this.data.stage,
  phone: this.data.phone,
  fatherphone:this.data.fatherphone,
  Emergencytelephon:this.data.Emergencytelephon,
  addres:this.data.addres,
  text:this.data.text,
   email:this.email,
  uid: this.myid


})
this.router.navigate(['/login'])
}

}
