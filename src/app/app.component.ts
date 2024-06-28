import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CarouselModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  customOptions: OwlOptions = {
   
    loop: true,
    mouseDrag: true,
    autoplay: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 500,
    navText: ['Prev', 'Next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }


  // an array of object for the nav
    Nav = [
      {
        name: "HOME"
      },

     { 
      
      name : "ABOUT US"

     },

     {
      name : "CONTACT US"
     },

     {
      name : "BLOG"
     },

     {
       name : "SERVICES"
     },

     {
      name : "RESTAURANTS"
     },

     {
      name : "DOCUMENTATIONS"
     }
    ]




// an object of string value for the hero section  
    content = {
      boldText : "Explore the World with Us",
      text1 : "Discover the beauty and adventure that the world has to offer.",
      text2 : "Whether you're looking for a serene beach escape, a thrilling",
      text3 : "mountain trek, or a cultural restaurant tour, we have the perfect destination",
      text4 : "for you. Join us on a journey to uncover hidden gems",
      text5 : "experience diverse cultures, and create unforgettable memories.",
      text6 : "Your adventure starts here!"
     }




    //  an object of string value for the about section 
    
    content2 = {
      text0 : "ABOUT US",
      text7 : "The most romantic and beautiful restaurants in Barcelona",
      text8 : " To look for the perfect romantic restaurant in Barcelona for anniversary, or better even, for a first date, could ",
      text9 : "become a challenging and time consuming quest Barcelona being a cosmopolitan city with a huge variety of places. If what you want is to impress that one special person,just having a good quality dinner will not be enough.Everything must be flawless: the setting , the service, the location, and of course the prices. To help ",
      text10 : "you choose that ideal place we created a list of the top 11 romantic restaurants in Barcelona Spain",
      
    }



    // Card section, an array of objects for text and images.

    cardData = [
      { text: 'You can always have a taste of our delicacies.', imgSrc: 'assets/images/col1.png' },
      { text: 'We love to give you the best feel of everything spicy and tasty.', imgSrc: 'assets/images/col2.png' },
      { text: 'Our sauges and creamy salads is haven, come have a feel.', imgSrc: 'assets/images/col3.png' },
      { text: 'Chips and Ketchup gives you a romantic feel eating it.', imgSrc: 'assets/images/col4.png' }
    ];


    //  links for my social media icons for the footer.

    links = [
      { name: 'Book Now', url: '#' },
      { name: 'Restaurant', url: '#' },
      { name: 'Home', url: '#' },
      { name: 'Social Links', url: '#' }
    ];


    socialLinks = [
      { url: 'https://www.linkedin.com/in/christiana-osedi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', iconClass: 'fa-brands fa-linkedin-in' },
      { url: 'https://www.facebook.com/profile.php?id=100006757068164', iconClass: 'fa-brands fa-facebook-f' },
      { url: 'https://www.instagram.com/osedichristacoal?igsh=MThzN242b3o1eHc1aA==', iconClass: 'fa-brands fa-instagram' },
      { url: 'https://x.com/OsediTiana?t=YRmE_Pnvcu6pY4QwKYCt7Q&s=09', iconClass: 'fa-brands fa-twitter' }
    ];


     ngOnInit(): void {
    
     }
     title = 'project_slider';
    }
    
    



  
