var task = JSON.parse(window.localStorage.getItem("valueL2"));
var blockit;
if (task == undefined) {
    task = []
    console.log(task)
}else{
    console.log(task)
}

/* DB.table('task'); // task 資料表存放事項資料
task.read({}, updateList); // 查詢所有資料並更新至畫面 */

updateList(task);
$('#create').click((text) => {
    text = $("#input").val();
    $("#input").val(empty);
    task.push({text: text});
    console.log(task);
});
$('#deleteAll').click(() => {

});
$('.delete').click(() => {

});
$('.update').click(() => {

});

// 將查詢的資料新增到介面列表上
function updateList (data) {
    
};

$("#save").click(() => {
    if (!blockit) {
        window.localStorage.removeItem('valueL2');
        window.localStorage.setItem('valueL2', JSON.stringify(pokemons));
        setTimeout(() => {
//           window.opener = null;
//           window.close();
             window.location.href="/L1/close.html";
             window.close();
        }, randomNB(1000, false, true));
        
    };
});
