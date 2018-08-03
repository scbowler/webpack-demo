import $ from 'jquery';
import './style.css';

$('#login').click(() => {
    console.log('Button Clicked');

    import('./helpers').then( resp => {
        console.log('Import Resp:', resp);

        const { login, addToDom } = resp;

        const result1 = login('SassySally', 'qwer');

        const result2 = login('SomeRandom', 'ghj');

        addToDom('h1', result1, 'blue');
        addToDom('h1', result2, 'purple');
    });
});

$('#load-image').click( async () => {
    console.log('Load image clicked');

    const resp = await import('./helpers');
    
    const { addImg } = resp;

    const src = await import('./webpack-logo.png')
            
    addImg(src.default);
});


