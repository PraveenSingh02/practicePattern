// function keyfind() {
//     const kw = ["hi", "he", "pk", "kumar"];
//     const inp = prompt("Enter a string: ");  // Replace with an actual input method (e.g., prompt in the browser)

//     let flag = false;

//     for (let i = 0; i < kw.length; i++) {
//         if (inp === kw[i]) {
//             flag = true;
//             break;
//         }
//     }

//     if (flag) {
//         console.log("present");
//     } else {
//         console.log("no");
//     }
// }

// keyfind();




function ReveserseNum(){
    console.log("hello");
    let n = 123;
    let r = 0;
    while(n > 0){
        r = r * 10 + (n % 10);
        n = Math.floor(n / 10);
    }
    console.log(r);
}
// ReveserseNum();

function pattern(){
    let r= prompt("enter");
    for(var i=1; i<=r; i++){
        for(var j=1; j<=i; j++){
            document.write("*"); 
            
        }
        document.write("<br>"); 
        
    }
    for(var i=r-1; i>=1; i--){                          
        for(var j=1; j<=i; j++){
            document.write("*"); 
            
        }
        document.write("<br>"); 
        
    }

}
//  pattern();

// function pattern1(){
//     // event.preventDefault() ;
//     let r= prompt("enter");
//     for(var i=r-1; i>=1; i--){
//         for(var j=1; j<=i; j++){
//             document.write("*"); 
            
//         }
//         document.write("<br>"); 
        
//     }

// }
// pattern1();
function pattern2(){
    let r=5;
    for(let i=1; i<=r; i++){

        for(let j=1; i<=r - i; j++){
           document.write("&nbsp;");
        }

        for(let k=1; k<=2 * i - 1; k++){
            document.write("*");

        }
        document.write("<br>");
    }
}
pattern2();





