import { Component, OnInit } from '@angular/core';
import{AngularFireDatabase,AngularFireList} from 'angularfire2/database'
import{Observable} from 'rxjs/Observable'; 
import { Key } from 'protractor';
import { Router } from  '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  itemList:AngularFireList<any>
  itemArray=[]
  
  data= {

    name:'',
    stage:'',
    phone: '',
    fatherphone: '',
    Emergencytelephon:'',
    addres:'',
    text:'',
    email:'',
    uid:''
  }
  myUid:any



  constructor(public db:AngularFireDatabase,public router:Router) { 
    this.itemList=db.list('Skills')
    this.itemList.snapshotChanges()
    .subscribe(action=>{
            action.forEach(action=>{
          let y=   action.payload.toJSON()
          y['$key']=action.key
          this.itemArray.push(y as itemListclass)

})
})
this.myUid= localStorage.getItem('uid')
console.log(this.itemArray)
}


  ngOnInit() {
  }
  moreInfo(key){

    this.router.navigate(['details/'+key])


  }


  editForm($key){
    for (let value of this.itemArray){
      if(value['$key'] ==$key){
        console.log(  value['$key'])

   
       this.data.name= value['name'];
       this.data.  stage= value['stage'];
       this.data. phone= value['phone'];
       this.data. fatherphone= value['fatherphone'];
       this.data. Emergencytelephon= value['Emergencytelephon'];
       this.data. addres= value['addres'];
       this.data. text= value['text'];
       
      }

  }
}
  onEdit($key){

    
    this.data.name
    this.data.  stage
    this.data. phone
    this.data. fatherphone
    this.data. Emergencytelephon
    this.data. addres
    this.data. text
    this.data.email
    this.data.uid


    this.itemList.set($key,{

  
      name:this.data.name,
      stage:this.data.stage,
      phone: this.data.phone,
      fatherphone:this.data.fatherphone,
      Emergencytelephon:this.data.Emergencytelephon,
      addres:this.data.addres,
      text:this.data.text
   
      })
     this. itemArray=[]
    }
// console.log("key:"  +$key + "  name:" + this.data. name +" stage:" + this.data. stage +" phone:" +  this.data.phone +" fatherphone:" + this.data. fatherphone+"  Emergencytelephon:"+ this.data.Emergencytelephon+"  addres:"+ this.data.addres)
// }
 

 onDelete( $key){
 this.itemList.remove($key)
 this. itemArray=[]
 }
 }

export class itemListclass{
$key:string;
  name:string;
  stage:string;
  phone: string;
  fatherphone: string;
  Emergencytelephon:string;
  addres:string;
  text:string;

}
  