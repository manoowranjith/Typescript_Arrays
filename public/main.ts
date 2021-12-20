import { ArrayService } from "./app-service";

export class ArrayComponent implements ArrayService {

    constructor() {}

    public arrayMultiply(myArray: any) : Array<Number> {
      var array_number:number[]=[];
      for(let i=0;i<myArray.length;i++)
      {
          if(myArray[i]%5 ==0 || myArray[i]%10==0)
          {
              array_number.push(myArray[i])
          }
      }
      return array_number;
    }

    public arraySeparate(myArray: any) : Array<string>{
        var array_string:string[]=[];
        for(let i=0;i<myArray.length;i++)
        {
            if(typeof(myArray[i])==="string")
            {
                array_string.push(myArray[i])
            }
        }
        return array_string;
    }

    public arraySplit(str:string[]) : Array<number>{
        var array_number:number[]=str.map(function(e){return parseInt(e)})
        var prime=[]
        for(var i=0;i<array_number.length;i++)
        {
            var flag=0;
            for(var j=2;j<array_number[i];j++)
            {
                if(array_number[i]%j==0)
                {
                    flag=1;
                }
            }
            if(flag == 0)
            {
                prime.push(array_number[i]);
                // console.log(array_number[i])
            }
        }
        return prime
        // return array_number
    }

    public arraySort(myArray:any):Array<string>{
        myArray.sort();
        return myArray
    }

    public arrayReplace(myArray:any):Array<number>{
        for(let i=0;i<myArray.length;i++){
            if(myArray[i]%3===0)
            {
                myArray[i] = 5;
            }
        }
        return myArray;
    }
       
}

let myArray: number[] = [34, 45, 60, 23, 13, 25, 70];
let myArray_mixed: any[] =[34, "A", 45, 60, 23, "B", 13, 25, 70]
let myArray_strings :string[] =["A", "C", "B", "D"]
let array = new ArrayComponent();

console.log(array.arrayMultiply(myArray));
console.log(array.arraySeparate(myArray_mixed));
console.log(array.arraySplit(myArray.map(function(e){return e.toString()})));
console.log(array.arraySort(myArray_strings));
console.log(array.arrayReplace(myArray));



