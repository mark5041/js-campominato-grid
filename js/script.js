function blacklist(num)
{
    let myArray = [];
    let min = 1;
    let max = num;
    let number
    let i = 0;
    let x = 0;
    while(myArray.length < num * 2)
    {
        if(x != 2)
        {
            x++;
            do
            {
                number = Math.floor(Math.random() * max) + min;
            }
            while(myArray.includes(number))
            myArray[i] = number;
        }
        else    if(x == 2)
                {
                    x = 0;
                    i--;
                    max += num;
                    min += num;
                }
        i++;
    }
    console.log(myArray);
    return myArray;
}

let diff_selector = document.querySelector(".my-btn");

diff_selector.addEventListener('click', 
    function()
    {
        let row = document.querySelector(".row");
        row.innerHTML = '';

        let diff = document.querySelector(".my-selection");
        let col;
        let height

        switch(diff.value)
        {
            case '1':
                col = 10;
                height =  114;
            break;
            case '2':
                col = 9;
                height =  126.66;
            break;
            case '3':
                col = 7;
                height =  162.84;
            break;
        }

        let list = blacklist(col);
        let tot_box = col * col;

        for(let i = 1; i <= tot_box; i++)
        {
            let box = document.createElement("div");
            box.classList.add("box");
            box.style.width = `calc(100% / ${col})`;
            box.style.height = height + "px";
            box.append(i);
            row.append(box);

            box.addEventListener('click', 
                function()
                {
                    
                    if(!list.includes(box.innerHTML))
                    {
                        this.classList.add("bg-green");
                    }
                    else
                    {
                        this.classList.add("bg-red");
                    }
                }
            );
        }
        
    }
);


