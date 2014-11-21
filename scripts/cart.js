/**
 * Created by zyy on 14-11-21.
 */
$(document).ready(function(){
        var item_name,itemInfo,itemArr,listItems,total = 0.0;
        for(var i = 1; i< localStorage.length; i++) {
            item_name = localStorage.key(i);
            itemInfo = localStorage.getItem(item_name);
            itemArr = itemInfo.split(",");
            listItems = $('<tr>\
                            <td>' + itemArr[0] + '</td>\
                            <td>' + itemArr[1] + '</td>\
                            <td>' + itemArr[2] + '</td>\
                            <td>' + itemArr[3] + '</td>\
                            <td>' + itemArr[1]*itemArr[3] + '</td>\
                          </tr>');
            $('#cart').append(listItems);
           total += parseFloat(itemArr[1]*itemArr[3]);
        }
        $('#sum').text(total + "(元)");
});