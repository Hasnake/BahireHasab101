
var myDate = new Date();
var year = myDate.getFullYear();
select = document.getElementById('years');
for (var i = min; i<=max; i++){
       years.value = i;
       years.innerHTML = i;
       select.appendChild(opt);
}
