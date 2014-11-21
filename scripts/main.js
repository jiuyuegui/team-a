$(document).ready(function () {
    showCount();
    var feature = (function () {
        var initItems = function () {
            var items = loadAllItems();

            _(items).each(function (item) {
                var addCart = '<button>加入购物车</button>';
                var listItem = $('<tr>\
                            <td class="name">' + item.name + '</td>\
                            <td class="price">' + item.price + '</td>\
                            <td class="unit">' + item.unit + '</td>\
                            <td class="addCart">' + addCart + '</td>\
                          </tr>');
                $('#item-table').append(listItem);
            });
        };

        var printDate = function() {
            $("#pay-date").text(utils.getDate());
        };

        return {
            init: initItems,
            printDate: printDate
        };
    })();

    feature.init();
    feature.printDate();

    $('.addCart').click(function(){
        storeGoods($(this));
        var a = $('#count').text();
        a++;
        localStorage.setItem("num",a);
        showCount();
    });

    function storeGoods(present) {
        var Goods = present.parent().children().eq(0).text();
        var price = present.parent().children().eq(1).text();
        var unit = present.parent().children().eq(2).text();
        var GoodInfo = localStorage.getItem(Goods) || "";
        var GoodsNum = GoodInfo.split(",")[3] || 0;
        GoodsNum++;
        localStorage.setItem(Goods,Goods + "," + price +","+ unit + "," + GoodsNum);
    }

    function showCount() {
        var b = localStorage.getItem("num") || 0;
        $("#count").text(b);
    }

});
