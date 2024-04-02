// Javascript Array and it's Method

{
    let array = [10, 50, 89, 101, 569];

    array[0] = 30;

    console.log(array);

    let Newarray = new Array (10 ,50, 96 , 65 , 100);

    console.log(array);

    console.log(Newarray);

    console.log(array.length);

    console.log(Newarray.length);

    console.log(typeof(array));

    console.log(typeof(Newarray));
}

{
    let array = [10];

    let Newarray = new Array(10);

    console.log(array);

    console.log(Newarray);

    console.log(array.length);

    console.log(Newarray.length);
}

{
    let array = ["Javascript" , 56 , true , false , undefined , null , NaN];

    console.log(array);

    console.log(array.length);

    console.log(array[0]);

    console.log(array[6]);


// Array push Method

    array.push("Python");
    array.push("HTML");
    console.log(array);

    // Array unshift method

    array.unshift("C++");
    array.unshift("Java");
    console.log(array);

    // Array pop method

    array.pop();
    array.pop();
    
    console.log(array);

    // Array toString Method

    let string = array.toString();

    console.log(string);

    // Array reverse Method

    let reverse = array.reverse();
    console.log(reverse);

    // Array forEach method

    array.forEach((item) => console.log(item))

    // Array concat Method

    {
        let array1 = [12 , 45 , 986];
        let array2 = [true , false]
        let array3 = ["reactjs" , "nodejs"]

        let Newarray = array1.concat(array2 , array3)

        console.log(Newarray);
    }
}