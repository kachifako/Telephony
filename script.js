
let phoneNo = document.getElementById('phoneNo')



  phoneNo.addEventListener('invalid', () => {
    if(phoneNo.value === '') {
      phoneNo.setCustomValidity('Enter a valid phone number!');
    } else {
      phoneNo.setCustomValidity('Enter phone number in this format: +2341234567890');
    }
  });




  phoneNo.addEventListener('input', () =>{

	let inputImage = document.getElementById('output');

    for(i=0; i < phoneNo.value.length; i++ ){
    if( phoneNo.value.startsWith("803", 4) || phoneNo.value.startsWith("806", 4) || phoneNo.value.startsWith("703", 4)  || phoneNo.value.startsWith("706", 4) || phoneNo.value.startsWith("813", 4) || phoneNo.value.startsWith("816", 4) || phoneNo.value.startsWith("810", 4) || phoneNo.value.startsWith("814", 4) || phoneNo.value.startsWith("903", 4) || phoneNo.value.startsWith("906", 4) || phoneNo.value.startsWith("913", 4) || phoneNo.value.startsWith("916", 4) || phoneNo.value.startsWith("7026", 4) || phoneNo.value.startsWith("704", 4)){
	 inputImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/MTN_Logo.svg/2048px-MTN_Logo.svg.png";
    }
    
    else if( phoneNo.value.startsWith("805", 4) || phoneNo.value.startsWith("807", 4) || phoneNo.value.startsWith("705", 4)  || phoneNo.value.startsWith("815", 4)|| phoneNo.value.startsWith("811", 4) || phoneNo.value.startsWith("905", 4) || phoneNo.value.startsWith("915", 4)){
        inputImage.src = "https://thenationonlineng.net/wp-content/uploads/2021/04/Glo-Cafe.png";
       }
       
       else if( phoneNo.value.startsWith("802", 4) || phoneNo.value.startsWith("808", 4) || phoneNo.value.startsWith("708", 4)  || phoneNo.value.startsWith("812", 4)|| phoneNo.value.startsWith("701", 4) || phoneNo.value.startsWith("902", 4) || phoneNo.value.startsWith("901", 4) || phoneNo.value.startsWith("904", 4) || phoneNo.value.startsWith("907", 4) || phoneNo.value.startsWith("912", 4)){
        inputImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfsVubA4hrxlD-8_tFyRAxjDSlcBN4Lb5_QYJAQIA9J6Iz23d8TkkxS7d4j2vW9hg6PNo&usqp=CAU";
       }
       
       else if( phoneNo.value.startsWith("809", 4) || phoneNo.value.startsWith("818", 4) || phoneNo.value.startsWith("817", 4)  || phoneNo.value.startsWith("909", 4) || phoneNo.value.startsWith("908", 4)){
        inputImage.src = "https://cdn.punchng.com/wp-content/uploads/2017/07/19170207/9Mobile-Telecom-Logo.jpg";
       }
}
});

