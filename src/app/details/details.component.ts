import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import{AngularFireDatabase,AngularFireList} from 'angularfire2/database'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id:any
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

  constructor(public db:AngularFireDatabase ,private route:ActivatedRoute) {

this.route.params.subscribe(Params=> {
  this.id=Params

 });
 this.itemList=db.list('Skills')
 this.itemList.snapshotChanges()
 .subscribe(action=>{
         action.forEach(action=>{
       let y=   action.payload.toJSON()
       y['$key']=action.key
    
       if(action.key === this.id['id']){
      this.itemArray.push(y as itemListclass)
  this.data.name=this.itemArray[0] ['name']
  this.data.stage=this.itemArray[0] ['stage']
  this.data.phone=this.itemArray[0] ['phone']
  this.data.fatherphone=this.itemArray[0] ['fatherphone']
  this.data.Emergencytelephon=this.itemArray[0] ['Emergencytelephon']
  this.data.addres=this.itemArray[0] ['addres']
  this.data.text=this.itemArray[0] ['text']
  this.data.email=this.itemArray[0] ['email']
      console.log(this.itemArray[0] ['text'])
            
      
        
       }
    

})

})








   }

  ngOnInit() {
    console.log(this.id ['id'])
    console.log(this.data)
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
    email:string;
  
  }
    