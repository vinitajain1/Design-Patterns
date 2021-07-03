class Share{
     share(){}
}

class SMSShare extends Share{
     share(){console.log("Share via SMS");}
}
class EmailShare extends Share{
     share(){console.log("Share via EMAIL");}
}
class SocialMediaShare extends Share{
     share(){console.log("Share on SOCIAL MEDIA");}
}

class PhoneCameraApp{
     take(){
        console.log("Take photo!");
    }
     save(){
        console.log("Save photo!");
    }
     setShareBehaviour(shareBehaviour){
        this.shareBehaviour = shareBehaviour
    }
     sharePhoto(){
        this.shareBehaviour.share();
    }
}

class BasicCameraApp extends PhoneCameraApp{
     edit(){
         console.log('Basic camera app edit!');
    }
}


let basicCamera = new BasicCameraApp();
basicCamera.setShareBehaviour(new SocialMediaShare());
basicCamera.sharePhoto();
console.log(basicCamera);