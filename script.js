let button = document.getElementById('btn-calculate');

button.addEventListener('click', () => {
    
    const first_user = document.getElementById('user--one');
    const first_user_value = first_user.value;

    const second_user = document.getElementById('user--two');
    const second_user_value = second_user.value;

    const result = document.getElementById('output--love');
    const details = document.getElementById('output--details');
    let first_user_status = false;
    let second_user_status = false;

    if (first_user_value === '') {
        document.getElementById('user--one--error').innerHTML = "Please input a valid username";
    } else {
        document.getElementById('user--one--error').innerHTML = '';
        first_user_status = true;
    }

    if (second_user_value === '') {
        document.getElementById('user--two--error').innerHTML = "Please input a valid username";
    } else {
        document.getElementById('user--two--error').innerHTML = '';
        second_user_status = true;
    }

    if (first_user_status && second_user_status) {
        let loveCalculator = (Math.floor((Math.random() * 100) + 1));
        result.innerHTML = loveCalculator + "%";

        if (loveCalculator <= 40) {
            details.innerHTML = "You don't like each other";
        } else if (loveCalculator > 40 && loveCalculator <= 70) {
            details.innerHTML = "You both have some interest";
        } else {
            details.innerHTML = "You both is a definition of true love";
        }
    } else {
        alert("Please input a valid username");
        result.innerHTML = '';
        details.innerHTML = '';
    }


});
