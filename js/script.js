/*Подключение локалки*/
// если в нашем хранилище уже что-то есть…
/*if (localStorage.getItem('text_in_editor') !== null) {
  // …то отображаем его содержимое в нашем редакторе
  document.getElementById('myUL').innerHTML = localStorage.getItem('text_in_editor');
}
// отслеживаем каждое нажатие клавиши и при каждом нажатии выполняем команду
document.addEventListener('keydown', function (e) {
  // записываем содержимое нашего редактора в хранилище
  localStorage.setItem('text_in_editor', document.getElementById('myUL').innerHTML);
});*/

// Создайте кнопку "Закрыть" и добавьте ее к каждому элементу списка
var myNodelist = document.getElementsByTagName("list");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
 var txt = document.createTextNode("🗑");
  span.className = "delete";
    /*span.appendChild(txt); */
  myNodelist[i].appendChild(span);
}

// Нажмите на кнопку "Закрыть", чтобы скрыть текущий элемент списка
var close = document.getElementsByClassName("delete");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

/*Новая кнопка для каждого li в  цикле*/
function createButtonElement() {
  var a = document.querySelectorAll("ul");

  for (var v = 0; v < a.length; v++) {
    var btn = document.createElement("li");

    btn.appendChild(document.createTextNode("span"));
    a[v].appendChild(btn);
  }
}

// Добавить "checked" символ при нажатии на элемент списка
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
 }
}, false);

// Создайте новый элемент списка при нажатии на кнопку "Добавить"
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
 var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Вы должны что-то написать!");
  } else {
   document.getElementById("myUL").appendChild(li);
  }
 document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("🖉"); 
span.className = "edit";
  span.appendChild(txt);
  li.appendChild(span);

  /*var elemText = document.createElement('li');
    elemText.contentEditable = "true";
    elemText.setAttribute('contenteditable', true);*/

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("🗑");
 span.className = "delete";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
     var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

