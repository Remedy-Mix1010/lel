function Start(){
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/390gQKpMN/model.json", modelReady);
    }
    function modelReady(){
        classifier.classify(gotResult);
    }
    function gotResult(error, result){
        if(error){
            console.log(error);
        }
        else{
            console.log(result);
            document.getElementById("accuracy").innerHTML = (result[0].confidence*100).toFixed(3) + "%";
            document.getElementById("sound").innerHTML = (result[0].label);
            img1 = document.getElementById("1");
            img2 = document.getElementById("2");
            if(result[0].label == "Background Noise"){
                img1.src = "dekusquad is firw.jfif"
                img2.src = "me and my homies.jpg"
            }
            else if(result[0].label == "snap"){
                img1.src = "dekusquad is firw.jfif"
                img2.src = "me and my homies.jpg"
            }
            else if(result[0].label == "Pika pi pikachu"){
                img1.src = "dekusquad is firw.jfif"
                img2.src = "me and my homies.jpg"
            }
            else{
                img1.src = "dekusquad is firw.jfif"
                img2.src = "me and my homies.jpg"
            }
        }
    }
    
    