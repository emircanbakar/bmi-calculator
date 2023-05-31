function calculate(){
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value
    let bmi = (weight / ((height * height)  / 10000));

    document.getElementById('heading').innerHTML = 'Your BMI result'
    document.getElementById('output').innerHTML = bmi.toFixed(2)

    if(bmi <= 24.9){
        document.getElementById('message').innerHTML = 'Underweight'
        document.getElementById('message').style.color = '#F79327';
    }else if( bmi >= 25 && bmi <= 29.9){
        document.getElementById('message').innerHTML = 'Healty weight'
        document.getElementById('message').style.color = '#107041';
    }else{
        document.getElementById('message').innerHTML = ' Overweight'
        document.getElementById('message').style.color = '#D21312';
    }

    if(weight == ""){
        document.getElementById('message').innerHTML = 'Please enter your weight'
        document.getElementById('message').style.color = '#D21312';
        document.getElementById('output').style.display = 'none';
    }else if(height == ""){
        document.getElementById('message').innerHTML = 'Please enter your height'
        document.getElementById('output').style.display = 'none';
    }else{
        document.getElementById('output').style.display = 'block';
    }
}

function reload(){
    window.location.reload()
}