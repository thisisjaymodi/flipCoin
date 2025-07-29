let $image = $("#image");
let $result = $("#result");
let $button = $("#button");
let $clickable = $(".clickable");

$clickable.off("click").on("click", flipCoin)


function flipCoin(){
    try{
        let headsSrc = "resources/heads.svg";
        let tailssSrc = "resources/tails.svg";
        let randNum = Math.random();

        let result = randNum > 0.5 ? "Heads" : "Tails";
        
        if (result === "Tails"){
            $result.text(result);
            $image.attr("src", tailssSrc);            
        }else{
            $result.text(result);
            $image.attr("src", headsSrc); 
        }
        // console.log(result);
    }catch(e){
        alert("an error occured." + e);
    }
}
