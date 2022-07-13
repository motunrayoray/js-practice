// document.getElementById('output').addEventListener('click', function()) to use the button in displaying the output
document.getElementById('add').addEventListener('click',function(){
    const input_one =  document.getElementById('input-one').value
    const input_two =  document.getElementById('input-two').value
    const oper = parseInt(input_one) + parseInt(input_two)
    document.getElementById('input-three').value = parseInt(oper)
    // document.getElementById('realtime').innerText = input_two
})

document.getElementById('sub').addEventListener('click',function(){
    const input_one =  document.getElementById('input-one').value
    const input_two =  document.getElementById('input-two').value
    const oper = parseInt(input_one) - parseInt(input_two)
    document.getElementById('input-three').value = parseInt(oper)
    // document.getElementById('realtime').innerText = input_two
})

document.getElementById('div').addEventListener('click',function(){
    const input_one =  document.getElementById('input-one').value
    const input_two =  document.getElementById('input-two').value
    const oper = parseInt(input_one) / parseInt(input_two)
    document.getElementById('input-three').value = parseFloat(oper)
    // document.getElementById('realtime').innerText = input_two
})

document.getElementById('mul').addEventListener('click',function(){
    const input_one =  document.getElementById('input-one').value
    const input_two =  document.getElementById('input-two').value
    const oper = parseInt(input_one) * parseInt(input_two)
    document.getElementById('input-three').value = parseInt(oper)
    // document.getElementById('realtime').innerText = input_two
})
document.getElementById('clr').addEventListener('click',function(){
      document.getElementById('input-one').value= ''
      document.getElementById('input-two').value=''
    document.getElementById('input-three').value = ''
    
})
