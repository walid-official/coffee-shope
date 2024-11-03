import toast from "react-hot-toast";

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
        toast.error('This is an error!')
    }else{
        StoredCoffee.push(id);
        const storedListCoffee = JSON.stringify(StoredCoffee);
        localStorage.setItem('coffee-list',storedListCoffee);
        toast.success('successfully added')
    }
}

const removeFromCoffeeList = (id) => {
    console.log(id);
    const favorites = getCoffeeList();
    const remaining = favorites.filter(coffee => coffee  != id);
    console.log(remaining);
    const storedListCoffee = JSON.stringify(remaining);
        localStorage.setItem('coffee-list',storedListCoffee);
        toast.success('successfully removed')
}
export {getCoffeeList,addToCoffeeList,removeFromCoffeeList};