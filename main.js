let arr1 = [1,2,3,4];
let arr2 = [5,10,15,20];
let arr3 = [];
let k =0;
let m =1;

for(i=0; i<arr1.length; i++){
      arr3[k++] = arr1[i];
	  k++;
}
for(j=0;j<arr2.length; j++){
     arr3[m++] = arr2[j];
	 ++m;
}
console.log(arr3);