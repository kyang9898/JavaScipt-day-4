const slideShow = { photoList: ['photo0', 'photo1', 'photo2', 'photo3'], currentPhotoIndex: 0 }
function nextPhoto() {
    // check if we are at photo0,...,photo3
    // no more and no less than these
    if (slideShow.currentPhotoIndex < slideShow.photoList.length - 1) {
        slideShow.currentPhotoIndex++;
        getCurrentPhoto();
    }
    else if (slideShow.currentPhotoIndex == slideShow.photoList.length - 1) {
        console.log("End of slide show") //Here if the photoIndex is at 0 we can manipulate this to show the last slide. 
    }
    else {
        console.log("Out of range");
    }
}
//Previous Photo
function prevPhoto() {
    if (slideShow.currentPhotoIndex > 0) {
        slideShow.currentPhotoIndex--;
        getCurrentPhoto();
    }
    else if (slideShow.currentPhotoIndex == 0) {
        console.log("No previous photo") //Here if the photoIndex is at 0 we can manipulate this to show the last slide. 
    }
    else {
        console.log("End of slide show")
    }
}
//Current Photo
function getCurrentPhoto() {
    var currentPhoto = slideShow.photoList[slideShow.currentPhotoIndex];
    console.log(currentPhoto);
    return currentPhoto;
}


function nextOnly(){

    getCurrentPhoto()
    nextPhoto();
    nextPhoto();
    nextPhoto();
    nextPhoto();
    nextPhoto();

}


function prevOnly(){

    getCurrentPhoto();
    prevPhoto();
    prevPhoto();
    prevPhoto();
    prevPhoto();
    prevPhoto();

}

function runTest1()
{
    nextOnly();
    prevOnly();
}

//runTest1();

function runTest2(){
    getCurrentPhoto();
    nextPhoto();
    nextPhoto();
    prevPhoto();
}

runTest2();