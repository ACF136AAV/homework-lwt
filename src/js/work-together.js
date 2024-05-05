import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const modalBackdrop = document.querySelector('.modal-backdrop');
const formBox = document.getElementById("form-box");
        formBox.addEventListener('submit', submitForm);

        function submitForm(event) 
        {   
            event.preventDefault();
            
            const email = document.querySelector('input[name="email"]');
            const comment = document.querySelector('input[name="comment"]');
            const validatecom = document.querySelector(".lwt-wrapper.com");
            const validatemail = document.querySelector(".lwt-wrapper.mail");
            
            

            if(!email.value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
            {
                validatecom.classList.add("invalid");
                validatemail.classList.add("invalid");
                validatecom.classList.remove("success");
                validatemail.classList.remove("success");
                iziToast.error({
                  title: 'Error',
                  message: 'Invalid data, try again!',
                  maxWidth: 300,
                  progressBar: true,
                  position: 'bottomRight',
                  color: '#1c1d20',
                  backgroundColor: '#ed3b44',
                });
                return;
            }

            const data = {
                email: email.value,
                comment: comment.value
            };
            
            fetch('https://portfolio-js.b.goit.study/api/requests', {  
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (response.ok) {
                    validatecom.classList.add("success");
                    validatemail.classList.add("success");
                    validatecom.classList.remove("invalid");
                    validatemail.classList.remove("invalid");
                    modalBackdrop.classList.remove("visually-hidden");
                    const form = document.getElementsByClassName("form")[0];
                    form.reset();
                } else {
                    validatecom.classList.add("invalid");
                    validatemail.classList.add("success");
                    validatecom.classList.remove("success");
                    validatemail.classList.remove("invalid");
                        iziToast.error({
                        title: 'Error',
                        message: 'Something is wrong, try again!',
                        maxWidth: 300,
                        progressBar: true,
                        position: 'bottomRight',
                        color: '#1c1d20',
                        backgroundColor: '#ed3b44',
                        });
                    return 
                }
            }).catch(error => {
                console.error("Error:", error);
            });
        }

        const emailInput = document.getElementsByName("email")[0];

        emailInput.addEventListener("input", function() {
            const maxLength = emailInput.offsetWidth / 8;
            const value = emailInput.value;

            if (value.length > maxLength) {
              emailInput.value = value.substring(0, maxLength) + "...";
            }
        });

        const modalCloseButton = document.querySelector('.modal-close-btn');
        modalCloseButton.addEventListener('click', () =>
             modalBackdrop.classList.add('visually-hidden')
        );
        modalBackdrop.addEventListener('click', () => {
            if (event.target === modalBackdrop) {
            modalBackdrop.classList.add('visually-hidden');
            }
        });
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape') {
                modalBackdrop.classList.add('visually-hidden');
            }
        });