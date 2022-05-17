var product = [
    {
        name: "Giày Converse",
        category_name: "Giày Converse",
        price: 400000,
        price_sale: 375000,
        image: '../img/sp1.jpg',
    },
    {
        name: "Giày Adidas Sò",
        category_name: "Giày Adidas",
        price: 350000,
        price_sale: 325000,
        image: '../img/sp2.jpg',
    },
    {
        name: "Giày Adidas Ultraboost",
        category_name: "Giày Adidas",
        price: 500000,
        price_sale: 450000,
        image: '../img/sp3.jpg',
    },
    {
        name: "Giày Nike Air Force",
        category_name: "Giày Nike",
        price: 450000,
        price_sale: 375000,
        image: '../img/sp4.jpg',
    },
    {
        name: "Giày Nike M2K",
        category_name: "Giày Nike",
        price: 550000,
        price_sale: 455000,
        image: '../img/sp5.jpg',
    },
];
function products() {
    return;
    [
        {
            name: "Giày Converse",
            category_name: "Giày Converse",
            price: 400000,
            price_sale: 375000,
            image: '../img/sp1.jpg',
        },
        {
            name: "Giày Adidas Sò",
            category_name: "Giày Adidas",
            price: 350000,
            price_sale: 325000,
            image: '../img/sp2.jpg',
        },
        {
            name: "Giày Adidas Ultraboost",
            category_name: "Giày Adidas",
            price: 500000,
            price_sale: 450000,
            image: '../img/sp3.jpg',
        },
        {
            name: "Giày Nike Air Force",
            category_name: "Giày Nike",
            price: 450000,
            price_sale: 375000,
            image: '../img/sp4.jpg',
        },
        {
            name: "Giày Nike M2K",
            category_name: "Giày Nike",
            price: 550000,
            price_sale: 455000,
            image: '../img/sp5.jpg',
        },
    ];
}
var showProductList = function (data) {
    var _html = '';
    for (let key of data) {
        _html += `
            <tr>
                <th scope="row">${key.name}</th>
                <td>${key.category_name}</td>
                <td><del>${key.price}</del></td>
                <td>${key.price_sale}</td>
                <td><img src="${key.image}"/></td>
            </tr>
        `;
    }
    var _bodyList = document.getElementById("tbody-list");
    _bodyList.innerHTML = _html;
};
showProductList(product);
var input_category = document.getElementById('input_category');
var btn_filter_category = document.getElementById('btn_filter_category');
btn_filter_category.onclick = function () {
    let _product = products();
    let cates = input_category.value;
    if (cates == '') {
        alert('Vui Long Nhap Category Name');
        return;
    }
    let ProductFilter = product.filter(function (obj) {
        return cates == obj.category_name;
    });
    showProductList(ProductFilter);
};
var sortPrices = (sort_type) => {
    let _product = products();
    if (sort_type == 'ASC') {
        let priceSort = product.sort(function (a, b) {
            return a.price < b.price ? -1 : 0;
        });
        showProductList(priceSort);
    }
    else if (sort_type == 'DESC') {
        let priceSort = product.sort(function (a, b) {
            return a.price > b.price ? -1 : 0;
        });
        showProductList(priceSort);
    }
    else {
        showProductList(product);
        return;
    }
};
var input_f = document.getElementById("input_first");
var input_s = document.getElementById("input_second");
var btn_sort = document.getElementById('btn_sort');
btn_sort.onclick = function () {
    let first = input_f.value;
    let second = input_s.value;
    if (first == '' || second == '') {
        alert('Vui Long Nhap Gia Tri');
        return;
    }
    let Filter = product.filter(function (obj) {
        return first <= obj.sale_price && obj.sale_price <= second;
    });
    showProductList(Filter);
};
