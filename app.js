let resultView = document.getElementById('resultView');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                resultView.innerText = '';
                break;
            case '=':
                try{
                    resultView.innerText = eval(resultView.innerText);
                } catch {
                    resultView.innerText = "Error"
                }
                break;
            case '←':
                if (resultView.innerText){
                    resultView.innerText = resultView.innerText.slice(0, -1);
                }
                break;
            default:
                resultView.innerText += e.target.innerText;
        }
    });
});