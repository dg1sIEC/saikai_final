var id;

for (let i = 1; i <= 18; i++) {
  const element = document.getElementById(i.toString());
  if (element) {
    id = i;
  }
}
document.forms[0].onsubmit = (event) => {
    event.preventDefault()
    const answer = document.querySelector(".input").value
    fetch(`https://cj4wdb3dva.execute-api.us-east-2.amazonaws.com/default/saikaiJudge?id=${id}&answer=${answer}`)
      .then((res) => res.json())
      .then((result) => {
        r = result.body.replace(/\"/g, "")
        if (r === 'Wrong Answer! Please Try Again.'){
            alert(r)
        } else {
            window.location.href = `./${r}.html`
        }
    })
    .catch(error => console.error(error));
}