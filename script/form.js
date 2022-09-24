function formHandler(){
    const form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const modalBody = document.getElementById(`modal-body`);
    
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response =>{
            if(response.ok){
            modalBody.innerHTML = "Thanks for your submission!";
            form.reset()
            }else{
            response.json().then(data =>{
                if(Object.hasOwn(data, 'errors')){
                modalBody.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                }else{
                modalBody.innerHTML = "Oops! There was a problem submitting your form"
                }
            })
            }
        }).catch(error =>{
            modalBody.innerHTML = "Oops! There was a problem submitting your form"
        });
    }
    
    form.addEventListener("submit", handleSubmit);
}


export default formHandler;