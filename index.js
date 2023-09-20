const input = document.querySelector("#guess");
const button = document.querySelector("#btn");
const answer = Math.floor(Math.random()*20)+1;


input.addEventListener("keypress", function(e){
if(e.keyCode === 13) {
    play();
}
})

button.addEventListener("click",play);

//Доступ число пользователя- DONE!
//- Нет возможности ввести число меньше 1 и больше 20!
// Запрещаем пользователю вводить символы и буквы!
function play() {
    const userNumber = document.querySelector("#guess").value
    //Если цифра которую пользователь вводит меньше чем один или Если цифра которую вводит пользователь больше 20 
    if ( userNumber < 1 || userNumber > 20 ) {
        Swal.fire({
            icon: 'error',
            title: 'Ой',
            text: 'Введите число от 1 до 20.',
            
          })
        }

        else if (isNaN(userNumber)) {
            Swal.fire({
                icon: 'error',
                title: 'Ой',
                text: 'Нужно ввести число!',
                
              })

        }
        
         else {
            if (userNumber < answer) {
               Swal.fire('Попробуй число по выше!',
                'Компьютер пока побеждает')
            }
         

         else if (userNumber > answer) {
            Swal.fire('Попробуй число пониже!',
            'Компьютер пока побеждает')
                }

           else {
            Swal.fire({
                title: 'ПОБЕДА!',
                imageUrl: 'https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmljdG9yeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
                imageWidth: 600,
                imageHeight: 400,
                imageAlt: 'Custom image',
              })
                  }
              }
             
    
            

        

















    }

 