const getCoffeeList = () => {
    const storedCoffeeList = localStorage.getItem('coffee-list');
    if(storedCoffeeList){
        const CoffeeList = JSON.parse(storedCoffeeList);
        return CoffeeList;
    }
    else{
        return [];
    }
}

const addToCoffeeList = (id) => {
    const StoredCoffee = getCoffeeList();
    if(StoredCoffee.includes(id)){
        alert(id,"Already Exists in The Read List")
    }else{
        StoredCoffee.push(id);
        const storedListCoffee = JSON.stringify(StoredCoffee);
        localStorage.setItem('coffee-list',storedListCoffee);
    }
}

export {getCoffeeList,addToCoffeeList};