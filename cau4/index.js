class Phone {
    constructor(code, name, brand, price) {
        this.code = code;
        this.name = name;
        this.brand = brand;
        this.price = price;
    }

    // Getter và setter cho các thuộc tính
    get getCode() {
        return this.code;
    }

    set setCode(code) {
        this.code = code;
    }

    get getName() {
        return this.name;
    }

    set setName(name) {
        this.name = name;
    }

    get getBrand() {
        return this.brand;
    }

    set setBrand(brand) {
        this.brand = brand;
    }

    get getPrice() {
        return this.price;
    }

    set setPrice(price) {
        this.price = price;
    }

    // Phương thức toString()
    toString() {
        return `Mã điện thoại: ${this.code}, Tên: ${this.name}, Hãng sản xuất: ${this.brand}, Giá: ${this.price}`;
    }
}

class PhoneManager {
    constructor() {
        this.phones = [];
    }

    // Thêm mới một điện thoại vào danh sách
    addPhone(phone) {
        this.phones.push(phone);
        this.displayPhones();
    }

    // Hiển thị danh sách điện thoại
    displayPhones() {
        const phoneList = document.getElementById('phoneList');
        phoneList.innerHTML = '';
        this.phones.sort((a, b) => a.getName.localeCompare(b.getName));
        this.phones.forEach(phone => {
            const li = document.createElement('li');
            li.textContent = phone.toString();
            phoneList.appendChild(li);
        });
    }
}

const phoneManager = new PhoneManager();

function addPhone() {
    const code = document.getElementById('code').value;
    const name = document.getElementById('name').value;
    const brand = document.getElementById('brand').value;
    const price = document.getElementById('price').value;

    const phone = new Phone(code, name, brand, price);
    phoneManager.addPhone(phone);
}