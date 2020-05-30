$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 0 ? 0 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});

var arr = new Array(10);
arr[0] = {
    cost: 37, kkal: 206, x_B: 8, Zh: 7.8, x_U: 25.4
}
arr[1] = {
    cost: 50, kkal: 385, x_B: 17, Zh: 18.6, x_U: 37.4
}

arr[2] = {
    cost: 50, kkal: 364, x_B: 14, Zh: 16.8, x_U: 37.8
}
arr[3] = {
    cost: 50, kkal: 196, x_B: 7, Zh: 4.2, x_U: 30.8
}
arr[4] = {
    cost: 50, kkal: 334, x_B: 11, Zh: 17.9, x_U: 59.9
}
arr[5] = {
    cost: 57, kkal: 410, x_B: 19, Zh: 16.3, x_U: 39.7
}
arr[6] = {
    cost: 57, kkal: 429, x_B: 25, Zh: 18.6, x_U: 41.1
}
arr[7] = {
    cost: 114, kkal: 345, x_B: 15, Zh: 16.5, x_U: 34.5
}

arr[8] = {
    cost: 114, kkal: 380, x_B: 10, Zh: 22.3, x_U: 28.3
}
arr[9] = {
    cost: 57, kkal: 336, x_B: 8, Zh: 9.6, x_U: 52.8
}

function getvallues(){
    var sum_cost = 0;
    var sum_kkal = 0;
    var sum_B = 0;
    var sum_Zh = 0;
    var sum_U = 0;
    for(i = 0; i < arr.length;i++){
        var kol1 = document.getElementById(`ind_${i}`).value;
        for(j = 0; j < kol1; j++){
            sum_cost += arr[i].cost;
            sum_kkal += arr[i].kkal;
            sum_B += arr[i].x_B;
            sum_Zh += arr[i].Zh;
            sum_U += arr[i].x_U;
        }
        document.getElementById('Fi').innerHTML = `Итог:`;
        document.getElementById('Sum_cost').innerHTML = `Сумма: ${sum_cost.toFixed(2)} руб`;
        document.getElementById('Sum_kkal').innerHTML = `Калории: ${sum_kkal.toFixed(0)}`;
        document.getElementById('Sum_B').innerHTML = `Белки: ${sum_B.toFixed(1)}`;
        document.getElementById('Sum_Zh').innerHTML = `Жиры: ${sum_Zh.toFixed(1)}`;
        document.getElementById('Sum_U').innerHTML = `Углеводы: ${sum_U.toFixed(1)}`;
    }
}

