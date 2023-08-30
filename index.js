
 function changeColor() {
  const rectangle = document.getElementById('rectangle');

  const backgroundColor = rectangle.style.backgroundColor;
  const rectangleSize = rectangle.style.padding;

  if (backgroundColor === 'black') {
    rectangle.style.backgroundColor = 'white';
    rectangle.style.width = '200px';
    rectangle.style.color = 'black';
  } else {
    rectangle.style.backgroundColor = 'black';
    rectangle.style.width = '250px';
    rectangle.style.color = 'white';
  }

};
