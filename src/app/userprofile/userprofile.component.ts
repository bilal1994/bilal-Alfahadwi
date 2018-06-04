import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { Route, Router } from '@angular/router';
​
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  email: string;
  myid: string;
  itemList: AngularFireList<any>
  itemArray = []
​


data= {
 
  name:'',
  stage:'',
  phone: '',
  addres:'',
  fatherphone: '',
  Emergencytelephon: '',
  email:'',
  uid:'',
  image:''
}
​spinner:boolean=true
redirect:boolean=false
  userKey: any
​
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
​
​downloadURL: Observable<string>;
  imageURL: string
​
  constructor(private afStorage: AngularFireStorage, public db: AngularFireDatabase , public route:Router) {
    this.email = localStorage.getItem('email')
    this.myid = localStorage.getItem('uid')
​if(this.redirect==false){''}
    this.itemList = db.list('users')
​
    this.itemList.snapshotChanges()
      .subscribe(actions => {
        actions.forEach(action => {
          let y = action.payload.toJSON()
          y["$key"] = action.key
          this.userKey
          //   console.log(action.payload.toJSON())
          //   console.log(action.payload.child('uid').val() )
          if (action.payload.child('uid').val() == this.myid) {
            this.userKey = action.key
            this.itemArray.push(y as ListItemClass)
            this.data.name = this.itemArray[0]['name']
            this.data.stage = this.itemArray[0]['stage']
            this.data.phone = this.itemArray[0]['phone']
            this.data.addres = this.itemArray[0]['addres']
            this.data.fatherphone = this.itemArray[0]['fatherphone']
            this.data.Emergencytelephon = this.itemArray[0]['Emergencytelephon']
            this.data.email = this.itemArray[0]['email']
            this.data.image = this.itemArray[0]['image']
            this.data.uid = this.itemArray[0]['uid']

            this.spinner=false
​
        console.log(this.data)
          }
        })
      })
  }
​
  ngOnInit() {
    console.log(this.email)
    console.log(this.myid)
  }
​
  upload(event) {
    const id = Math.random().toString(36).substring(2);
    
    this.afStorage.upload(id,event.target.files[0]). then(()=>{
      this.ref = this.afStorage.ref(id);
      this.ref.getDownloadURL().subscribe(url=>{
        console.log(url)

  
      if (url) {
        this.imageURL = url

      this.itemList.set(this.userKey, {
        name: this.data.name,
        stage: this.data.stage,
        phone: this.data.phone,
        addres: this.data.addres,
        fatherphone: this.data.fatherphone,
        Emergencytelephon: this.data.Emergencytelephon,
        email: this.email,
        uid: this.myid,
        image: this.imageURL
      })

  }
​})})
  }
  onEdit() {
    this.itemList.set(this.userKey, {
      name: this.data.name,
      stage: this.data.stage,
      phone: this.data.phone,
      addres: this.data.addres,
      fatherphone: this.data.fatherphone,
        Emergencytelephon: this.data.Emergencytelephon,
      email: this.email,
      uid: this.myid,
      image:this.data.image
    })
  }
}
​
export class ListItemClass {
  $key: string;
  name: string;
  stage: string;
  phone: string;
 addres: string;
 fatherphone:string;
 Emergencytelephon:string;
  email: string;
uid:string 

}