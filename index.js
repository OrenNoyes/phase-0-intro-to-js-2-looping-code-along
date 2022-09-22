function writeCards( namesArray, event ) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
    thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards 
}

function countDown( firstNum ) {
    while ( firstNum > 0 ) {
        console.log( firstNum );
            firstNum -= 1;
    }

    console.log( firstNum );
}