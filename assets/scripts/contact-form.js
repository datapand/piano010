// https://devncoffee.com/show-message-after-html-form-submit/
// (PART B) PROCESS FORM SUBMIT
function processform () {
    // (B1) GET HTML ELEMENTS
    let msg = document.getElementById("message"),
        form = document.getElementById("form"),
        submit = document.getElementById("submit");
  
    // (B2) LOCK SUBMIT BUTTON
    submit.disabled = true;
  
    // (B3) GET FORM DATA
    let data = new FormData(form);
  
    // (B4) SEND TO SERVER
    fetch("https://formspree.io/f/myzyjevw", { method: "POST", body: data })
    
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        return false;
      }
  
      return response.blob();
    })
    .then(txt => msg.innerHTML = txt )
    .catch((error) => {
      console.log(error)
      return false;
    })
    .finally(() => submit.disabled = false );
  
    form.reset()
  
    // (B5) PREVENT DEFAULT FORM SUBMIT
    return false;
  }
  
  if(document.getElementById('form')) {
    const form = document.querySelector('form');
    const thankYouMessage = document.querySelector('#thank-you-message');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      thankYouMessage.classList.add('show');
      setTimeout(() => processform(), 2000);
    });
  }
  