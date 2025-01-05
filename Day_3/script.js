function trangleRutate(n) {
    for (let i = 0; i <= n; i++) {
        let str = "";
        for (let j = 0; j <= n; j++) {
            if (i == 0 || i == n || j == 0 || j == n || i == j || i + j == n || (i > j && i + j >= n)) {

                str += i;
                str += j;
                str += " ";
            }
            else if((i<j && i+j<=n)){
                str+= i;
                str+= j;
                str+= " ";
            }
            // else if((i>j && i+j>=n)){
            //     str+= i;
            //     str+= j;
            //     str+= " ";
            // }
            else {

                str += "   ";
            }
        }
        console.log(str)
    }

}

// function simpleTringle(n) {
//     for(let i=0;i<=n;i++) {
//         let str='';
//         for(let j=0; j<=n-i;j++) 
//             str =str+j;   
//         console.log(str);   
//     }

// }






let n = 9;

trangleRutate(n);
// simpleTringle(n)


