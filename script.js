function divCreate(){
    let row = 1;
    let col = 1;
    while(col <= 16){
        while(row <= 16){
            const container = document.querySelector('.container');
            const smallDiv = document.createElement('div');
            smallDiv.setAttribute('class', 'small-div');
            smallDiv.style = 'width: 6.25%; height: 6.25%';
            container.appendChild(smallDiv);
            row++;
        }
        row = 1;
        col++;
    }
}

divCreate();