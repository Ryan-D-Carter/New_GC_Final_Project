import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-gallery',
  templateUrl: './my-gallery.component.html',
  styleUrls: ['./my-gallery.component.css']
})
export class MyGalleryComponent implements OnInit {

  /*Component purpose:
  1) display list of the user's favorite objects
  2) allow them to edit the haveVisited bool property
  3) allow them to delete the entry

  ***** drafted code --- not tested / not sure it's correct to start with. just a starting point. ****
  */

  // myGalleryList: MyGallery[] = [];


  // constructor(private galleryService: MyGalleryService) { }

  ngOnInit() {

    //   //show getGalleryByUser
     }

    // //get list of likes by user
    // getGalleryByUser (user: string) {
    //   this.galleryService.getGalleryByUser(user).subscribe(
    //     result => {
    //       this.galleryService = result; // reg squiggle b/c the functions in the service aren't complete
    //       console.log(this.myGalleryList)
    //     },
    //     error => console.log(error)
    //   )
    // }

    // //delete an item from their list of likes -- called when the user clicks "delete from my Gallery"
    // deleteGalleryItem (id: number): void {
    //   this.galleryService.deleteGalleryItem(id).subscribe(
    //     result => {
    //       this.getGalleryByUser(user);
    //       console.log(id);
    //     },
    //     error => console.log(error)
    //   )
    // }


    // //edit an item from the list of likes
    // editGalleryItem () {

    // }


    // // when the user clicks the "I've visited button"
    // onMarkAsVisited (){
    //   //change the bool to true & send that update to the API (editGalleryItem)

    // }

}
