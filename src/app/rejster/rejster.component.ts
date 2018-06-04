
import { Component, OnInit } from '@angular/core';
import{AngularFireAuth} from 'angularfire2/auth';
import{Router} from '@angular/router';
@Component({
  selector: 'app-rejster',
  templateUrl: './rejster.component.html',
  styleUrls: ['./rejster.component.css']
})
export class MyloginComponent implements OnInit {
email:string='';
password:string='';

  constructor( private fire:AngularFireAuth, private router:Router) { }

  ngOnInit() {
  }

  myLogin(){
    this.fire.auth.signInWithEmailAndPassword(this.email, this.password)
    .then(user =>{
      console.log(this.email, this.password)
      localStorage.setItem('isLoggedIn','true')
      localStorage.setItem('email',this.fire.auth.currentUser.email )

      this.fire.authState.subscribe(auth=>{
        if(auth){
  
          localStorage.setItem('uid',auth.uid )
  localStorage.setItem('uid',auth.uid )

  
        }
      })



      this.router.navigate(['home'])
    }).catch(error=>{
      console.error(error)
    })
  }

}
