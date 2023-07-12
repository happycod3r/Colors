import './../../styles/ctrl-bar.css';
import Colors from './../../js/colors.js';

const CtrlBar = () => {
    
    let ctrlBar = {
        
        rand_index: 0,  
        // We only want to do this once as it is extremely expensive to load
        // such a large number of hexidecimal values into memory.
        colors: Colors.apply(this),

        createRandomIndex: () => {
            let previousNumber = null;
            let randomNumber = Math.floor(Math.random() * 16777216);
            while (randomNumber === previousNumber) {
                randomNumber = Math.floor(Math.random() * 16777216);
            }
            previousNumber = randomNumber;
            return randomNumber;
        },

        onRandomColorBtnClick: e => {
            ctrlBar.rand_index = ctrlBar.createRandomIndex();
            document.getElementById('random-color-btn').value = ctrlBar.colors[ctrlBar.rand_index].toString();
            document.body.style.backgroundColor = ctrlBar.colors[ctrlBar.rand_index];
            document.getElementsByClassName('app')[0].style.backgroundColor = ctrlBar.colors[ctrlBar.rand_index];
        }

    };

    return (
        <div id='ctrl-bar'>
            <div id="random-color-btn-container">
                <input type='text' readOnly={true} id='random-color-btn' onClick={ctrlBar.onRandomColorBtnClick}></input>
            </div>
            <div id='toggles-container'>
                <input type='checkbox' id='bg-checkbox'></input>
                <input type='checkbox' id='fg-checkbox'></input>
            </div>
        </div>
    );
}

export default CtrlBar;
