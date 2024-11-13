let scrollContainer = document.querySelector(".gallery");
let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");



nextbtn.addEventListener("click", () => {
    scrollContainer.scrollLeft += 900;
})
backbtn.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 900;
})

const imageContainers = document.querySelectorAll('.image-container span');

imageContainers.forEach(container => {
  const image = container.querySelector('img');
  const text = container.querySelector('.text');

  image.addEventListener('click', () => {
    text.style.display = 'block';
  });

  image.addEventListener('touchstart', () => {
    text.style.display = 'block';
  });
});

const textElement = document.getElementById("text");
const buttonElement = document.getElementById("tombol");

const initialText = "\"Kegagalan adalah jalan menuju kesuksesan, maka jangan takut untuk mencoba segala hal yang positif\"";
const changedText = "\"Baik etika maupun pengetahuan akan menjandi percuma apabila keduanya tidak diamalkan dalam setiap tindakan\"";

buttonElement.addEventListener("click", function() {

  if (textElement.innerHTML === initialText) {
    textElement.innerHTML = changedText;
  } else {
    textElement.innerHTML = initialText;
  }
});