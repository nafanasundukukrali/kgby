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

var arr = new Array(50);
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
arr[10] = {
    cost: 171, kkal: 317.6, x_B: 23.4, Zh: 24.8, x_U: 33.6
}
arr[11] = {
    cost: 37, kkal: 130, x_B: 1.7, Zh: 10.3, x_U: 8.2
}
arr[12] = {
    cost: 37, kkal: 102.3, x_B: 1.4, Zh: 5.6, x_U: 7.6
}
arr[13] = {
    cost: 57, kkal: 234, x_B: 7, Zh: 18.8, x_U: 8.8
}
arr[14] = {
    cost: 43, kkal: 236, x_B: 6.5, Zh: 8.0, x_U: 8.4
}
arr[15] = {
    cost: 114, kkal: 200.4, x_B: 4.6, Zh: 8.5, x_U: 3.5
}
arr[16] = {
    cost: 114, kkal: 165, x_B: 15.5, Zh: 5.9, x_U: 12.5
}
arr[17] = {
    cost: 114, kkal: 314, x_B: 15.2, Zh: 24.2, x_U: 8.7
}
arr[18] = {
    cost: 114, kkal: 205.2, x_B: 18.9, Zh: 20.1, x_U: 14.6
}
arr[19] = {
    cost: 74, kkal: 206, x_B: 15.6, Zh: 13.8, x_U: 5.1
}
arr[20] = {
    cost: 74, kkal: 279, x_B: 9.3, Zh: 22.2, x_U: 11.7
}
arr[21] = {
    cost: 57, kkal: 317.6, x_B: 23.4, Zh: 24.8, x_U: 33.6
}
arr[22] = {
    cost: 57, kkal: 234.3, x_B: 7.6, Zh: 7.8, x_U: 14.6
}
arr[23] = {
    cost: 270, kkal: 442, x_B: 38, Zh: 34, x_U: 11.8
}
arr[24] = {
    cost: 114, kkal: 158.3, x_B: 5.1, Zh: 10.6, x_U: 8.7
}
arr[25] = {
    cost: 74, kkal: 264, x_B: 15, Zh: 10.8, x_U: 26.8
}
arr[26] = {
    cost: 74, kkal: 218.3, x_B: 16.1, Zh: 9.5, x_U: 23.2
}
arr[27] = {
    cost: 74, kkal: 300.6, x_B: 18.5, Zh: 4.9, x_U: 44.4
}
arr[28] = {
    cost: 114, kkal: 450, x_B: 19.3, Zh: 18.6, x_U: 45
}
arr[29] = {
    cost: 74, kkal: 370.5, x_B: 30.6, Zh: 12.9, x_U: 34.5
}
arr[30] = {
    cost: 114, kkal: 396, x_B: 19.8, Zh: 25.2, x_U: 21.6
}
arr[31] = {
    cost: 74, kkal: 416, x_B: 14, Zh: 35.9, x_U: 17.8
}
arr[32] = {
    cost: 114, kkal: 276, x_B: 16, Zh: 19.9, x_U: 23.5
}
arr[33] = {
    cost: 114, kkal: 818, x_B: 23, Zh: 54.3, x_U: 58.2
}
arr[34] = {
    cost: 171, kkal: 420, x_B: 16, Zh: 13.9, x_U: 57.9
}
arr[35] = {
    cost: 171, kkal: 385, x_B: 19, Zh: 23.8, x_U: 22.1
}
arr[36] = {
    cost: 270, kkal: 382, x_B: 50.1, Zh: 20.3, x_U: 18.6
}
arr[37] = {
    cost: 270, kkal: 721, x_B: 36, Zh: 14, x_U: 111
}
arr[38] = {
    cost: 350, kkal: 557.1, x_B: 42.5, Zh: 24.4, x_U: 44
}
arr[39] = {
    cost: 114, kkal: 383.1, x_B: 5.2, Zh: 16.3, x_U: 40.2
}
arr[40] = {
    cost: 243, kkal: 264, x_B: 13.4, Zh: 19.7, x_U: 8.4
}

arr[41] = {
    cost: 114, kkal: 480.3, x_B: 18.2, Zh: 20.1, x_U: 45.2
}
arr[42] = {
    cost: 74, kkal: 323, x_B: 18, Zh: 14, x_U: 31.1
}
arr[43] = {
    cost: 74, kkal: 570, x_B: 9.3, Zh: 12.4, x_U: 109.1
}
arr[44] = {
    cost: 43, kkal: 102.5, x_B: 0.75, Zh: 0, x_U: 25
}
arr[45] = {
    cost: 57, kkal: 205, x_B: 1.5, Zh: 0, x_U: 50
}
arr[46] = {
    cost: 43, kkal: 82.5, x_B: 0.25, Zh: 0, x_U: 20
}
arr[47] = {
    cost: 57, kkal: 165, x_B: 0.5, Zh: 0, x_U: 40
}
arr[48] = {
    cost: 43, kkal: 102.5, x_B: 0.75, Zh: 0, x_U: 25
}
arr[49] = {
    cost: 57, kkal: 205, x_B: 1.5, Zh: 0, x_U: 50
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
        document.getElementById('Sum_kkal').innerHTML = `Калории: ${sum_kkal.toFixed(2)}`;
        document.getElementById('Sum_B').innerHTML = `Белки: ${sum_B.toFixed(2)}`;
        document.getElementById('Sum_Zh').innerHTML = `Жиры: ${sum_Zh.toFixed(2)}`;
        document.getElementById('Sum_U').innerHTML = `Углеводы: ${sum_U.toFixed(2)}`;
    }
}

